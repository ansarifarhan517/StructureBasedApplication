import { IMongoFormStructure } from "@utils/components/mongo/interface"

export interface IDoctorFormReducerState {
  structure: IMongoFormStructure
  loading: boolean
  isEditMode: boolean,
  // driverData?: IDoctorData,
  resetData?: IDoctorFormData
}

// export interface IDoctorData {
//   driverId: number
//   driverName: string
//   isActiveFl: boolean
//   driverTimeZone?: string
//   gender?: 'Male' | 'Female'
//   guid?: string
//   addressList?: IAddressEntity[],
//   clientBranchId?: number
//   clientBranchName?: string
//   customFieldsEntity?: ICustomFieldsEntity[]
//   languageList?: IMultiselectEntity[]
//   licenseNumber: string
//   licenseProof?: IFileEntity[]
//   addressProofId?: IFileEntity[]
//   licenseType: string
//   licenseIssueBy?: string
//   maritalStatus?: 'Married' | 'Single'
//   phoneNumber?: string
//   shiftList: {
//     isActiveFl: boolean
//     shiftStartTime: number
//     shiftEndTime: number
//     startTime: number
//     endTime: number
//     driverId: number
//   }[]
//   status: string
//   referenceId: string
//   emailId?: string
//   dateOfBirth?: number
//   licenseValidity?: number
//   managerEmailId?: string
//   managerPhoneNumber?: string
//   previousCompanyName?: string
//   reportingManager?: string
//   salary?: string | number
//   vehicleNumber?: string | number
//   defaultVehicle?: string | number
//   driverEmployeeId?: string | number
//   experience?: string
//   [key: string]: any
// }


export interface IDoctorFormData {
  /** Pending - Add Form Formats for each */
  [key: string]: any
}


//----------------------> Actions

export interface IDoctorFormFetchStructure {
  readonly type: '@@doctorForm/FETCH_STRUCTURE'
}

export interface IDoctorFormSetStructure {
  readonly type: '@@doctorForm/SET_STRUCTURE'
  payload: IMongoFormStructure
}

export interface IDoctorFormSetLoading {
  readonly type: '@@doctorForm/SET_LOADING'
  payload: boolean
}

export interface IDoctorFormSetEditMode {
  readonly type: '@@doctorForm/SET_EDIT_MODE',
  payload: boolean
}

export interface IDoctorFormSetDriverData {
  readonly type: '@@doctorForm/SET_DRIVER_DATA',
  payload: IDoctorData
}

export interface ISetFormResetData {
  readonly type: '@@doctorForm/SET_FORM_RESET_DATA'
  payload: IDoctorFormData
}

export interface IResetState {
  readonly type: '@@doctorForm/RESET_INITIAL_STATE'
}

export type IDoctorFormActions =
  | IDoctorFormFetchStructure
  | IDoctorFormSetStructure
  | IDoctorFormSetLoading
  | IDoctorFormSetEditMode
  | IDoctorFormSetDriverData
  | ISetFormResetData
  | IResetState
