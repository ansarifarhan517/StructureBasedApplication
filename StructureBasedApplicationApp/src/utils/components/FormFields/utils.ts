import apiMappings from '@utils/apiMapping'
import axios from '@utils/axios'
import { IFetchedDropdownOptions } from './interface'



export const fetchPostDropdownOptions = async (lookupType: string, dynamicVar?: Record<string, unknown>, payload: unknown = null): Promise<IFetchedDropdownOptions> => {
  const getParams = () => {
    if (lookupType === 'getVehiclesList') {
      return {
        pageNumber: 1,
        pageSize: 50,
        ...(dynamicVar && {
          searchBy: 'vehicleNumber',
          searchText: dynamicVar.value,
        }),
      }
    }
    if (lookupType === 'getEndedTrips') {
      return {
        fromDate: dynamicVar?.startDate,
        toDate: dynamicVar?.endDate,
      }
    }
    if (lookupType === 'getDAList') {
      return {
        pageNumber: 1,
        pageSize: 50,
        ...(dynamicVar && {
          searchBy: 'deliveryMediumMasterName',
          searchText: dynamicVar.value,
        }),
      }
    }
    if (lookupType === 'getTripsBetweenDates') {
      return {
        startDateFilter: dynamicVar?.startDate,
        endDateFilter: dynamicVar?.endDate,
        pageNumber: 1,
        pageSize: 50,
        ...(dynamicVar && {
          searchText: dynamicVar.value,
        }),
      }
    }
    return {}
  }

  const { data, status } = await axios.post(`${(apiMappings.common.lookup as Record<string, string>)[lookupType || '']}`, payload,
    {
      params: { ...getParams() },
    })

  if (status === 200) {
    switch (lookupType) {
      case 'getEndedTrips':
      case 'getTripsBetweenDates': {
        const mapping: Record<string, unknown> = {}
        return {
          options: data.data.map((option: Record<string, unknown>) => {
            mapping[`${option.tripId}`] = {
              ...option,
              id: option.tripId,
              name: option.tripName,
            }
            return {
              label: option.tripName,
              value: option.tripId,
            }
          }),
          mapping,
        }

      }
      case 'getVehiclesList': {
        const mapping: Record<string, unknown> = {}
        return {
          options: data.data.results.map((option: Record<string, unknown>) => {
            mapping[`${option.vehicleId}`] = option
            return {
              label: option.vehicleNumber,
              value: option.vehicleId,
            }
          }),
          mapping,
        }
      }
      case 'getDAList': {
        const mapping: Record<string, unknown> = {}
        return {
          options: data.data.results.map((option: Record<string, unknown>) => {
            mapping[`${option.deliveryMediumMasterId}`] = option
            return {
              label: option.deliveryMediumMasterName,
              value: option.deliveryMediumMasterId,
            }
          }),
          mapping,
        }
      }
      case 'getBranchVehiclesList': {
        const mapping: Record<string, unknown> = {}
        return {
          options: data.map((option: Record<string, unknown>) => {
            mapping[`${option.vehicleId}`] = option
            return {
              label: option.vehicleNumber,
              value: option.vehicleId,
            }
          }),
          mapping,
        }
      }
      case 'getBranchDAList': {
        const mapping: Record<string, unknown> = {}
        return {
          options: data.map((option: Record<string, unknown>) => {
            mapping[`${option.deliveryMediumMasterId}`] = option
            return {
              label: option.deliveryMediumMasterName,
              value: option.deliveryMediumMasterId,
            }
          }),
          mapping,
        }
      }
      case 'getBranchDriversList': {
        const mapping: Record<string, unknown> = {}
        return {
          options: data.map((option: Record<string, unknown>) => {
            mapping[`${option.driverId}`] = option
            return {
              label: option.driverName,
              value: option.driverId,
            }
          }),
          mapping,
        }
      }
      default: {
        const mapping: Record<string, unknown> = {}
        return {
          options: data.map((option: Record<string, unknown>) => {
            mapping[`${option.id}`] = option
            return {
              label: option.name,
              value: option.id,
            }
          }),
          mapping,
        }
      }
    }
  } else {
    const mapping: Record<string, unknown> = {}
    return {
      options: [],
      mapping,
    }
  }
}

export const fetchDropdownOptions = async (
  lookupType: string,
  dynamicVar?: Record<string, string>,
  dependentVar?: string,
): Promise<IFetchedDropdownOptions> => {
  const getParams = () => {
    if (dynamicVar) {
      if (lookupType === 'getPincode') {
        return {
          pincode: dynamicVar.pincode,
          countryId: dynamicVar.country,
        }
      }

    }
    return {}
  }

  const subClientId =
    dependentVar && dependentVar?.id ? '?subClientId=' + dependentVar?.id : ''
  const { data, status } = await axios.get(
    `${(apiMappings.common.lookup as Record<string, string>)[lookupType || '']}` +
    subClientId,
    {
      data: {},
      params: {
        ...getParams(),
      },
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  if (status === 200) {
    switch (lookupType) {
      case 'getPincode': {
        if (data && data.length > 0) {
          const mapping: Record<string, unknown> = {}
          return {
            options: data.map((option: Record<string, unknown>) => {
              mapping[`${option.pincodeId}`] = {
                ...option,
                id: option.pincodeId,
              }
              return {
                label: option.name,
                value: option.pincodeId,
                description: 'This is Farhan',
              }
            }),
            mapping,
          }
        }
        // Return an empty result if data is not available
        return {
          options: [],
          mapping: {},
        }
      }
      default: {
        const mapping: Record<string, unknown> = {}
        return {
          options: data.map((option: Record<string, unknown>) => {
            mapping[`${option.name}`] = option
            return {
              label: option.name,
              value: option.name,
            }
          }),
          mapping,
        }
      }
    }
  }

  // Return an empty result for non-200 status codes
  return {
    options: [],
    mapping: {},
  }
}

export const prepareDataFromDropdownValue = (data: object[] | undefined) => {
  const mapping: Record<string, unknown> = {}
  return {
    options: data?.map((option: any) => {
      mapping[`${option.clientNodeId}`] = {
        ...option,
        id: option.clientNodeId,
      }
      return {
        label: `${option.clientNodeAddressCd}`,
        value: option.clientNodeId,
        title: `${option.clientNodeAddressCd}(${option.isActiveFl ? 'Active' : 'Inactive'})`,
        description: option.address,
      }
    }) || [],
    mapping,
  }
}