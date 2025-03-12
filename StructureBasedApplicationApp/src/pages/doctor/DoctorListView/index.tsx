// import { Button } from '@ui-library/components/atoms'
import Box from '@ui-library/components/atoms/Box'
import Breadcrumb from '@ui-library/components/molecules/Breadcrumb'
// import DropDown from '@ui-library/components/molecules/Dropdown'
// import { IUniversalDropdownChildren } from '@ui-library/components/molecules/Dropdown/interface'
// import IconDropdown from '@ui-library/components/molecules/IconDropdown'
import React from 'react'
import { useBreadCrumbs } from './DoctorListView.utils'

const DoctorListView = () => {

  const { breadCrumbOptions, handleBreadCrumbClick } = useBreadCrumbs()
  // const options = [
  //   {
  //     value: 'emailVerificationPending',
  //     label: 'Email Verification Pending Shipper',
  //   },
  //   {
  //     value: 'allShippers',
  //     label: 'All Shippers'
  //   },
  //   {
  //     value: 'approvalPendingShippers',
  //     label: 'Approval Pending Shippers'
  //   },
  // ]

  // const FormSelectOption = [
  //   {
  //     value: 'Credit',
  //     label: 'Credit',
  //     title: 'Credit',
  //     description:
  //       'Credit transaction will add to the outstanding amount of (Delivery Associate)',
  //   },
  //   {
  //     value: 'Debit',
  //     label: 'Debit',
  //     title: 'Debit',
  //     description:
  //       'Credit transaction will deduct from the outstanding amount of (Delivery Associate)',
  //   },
  // ]

  // const ListViewOption = [
  //   {
  //     value: 'available',
  //     label: 'Mark As Available',
  //     color: 'blue',
  //     tooltipText: 'Mark As Available',
  //     isDisabled: true,
  //   },
  //   {
  //     value: 'unavailable',
  //     label: 'Mark As Unavailable',
  //     color: 'red',
  //     tooltipText: 'Mark As Unavailable',
  //   },
  //   {
  //     value: 'active',
  //     label: 'Mark As Active',
  //     color: 'purple',
  //     tooltipText: 'Mark As Active',
  //   },
  //   {
  //     value: 'inactive',
  //     label: 'Mark As Inactive',
  //     color: 'green',
  //     tooltipText: 'Mark As Inactive',
  //   },
  // ]

  return (
    <>
      {/* <Box p="6em" bgColor="grey.50">
        <DropDown
          variant={'default-select'}
          optionList={options}
          label={'Name'}
          required={true}
          loading={true}
          onChange={() => 'Value selected'}
          error={false}
          errorMessage={'Mandatory field'}
          placeholder={'Select'}
          value={'chocolate'}
          width={'300px'}
          disabled={false}
        />
      </Box>
      <Box p="6em" bgColor="grey.50" >
        <DropDown
          variant={'form-select'}
          optionList={FormSelectOption}
          label={'Name'}
          required={true}
          loading={false}
          onChange={() => 'Value selected'}
          error={false}
          errorMessage={'Mandatory field'}
          placeholder={'Select'}
          value={'emailVerificationPending'}
          width={'300px'}
          onMenuOpen={() => 'Menu Open'}
          onMenuClose={() => 'Menu Close'}
          showDescription={true}
          tooltipMessage={'i am form select tooltip'}
          disabled={false}
        />
      </Box> 
      <Box p="2em" bgColor="grey.50">
        <IconDropdown
          variant={'default-dropdown'}
          optionList={ListViewOption}
          width={'120px'}
          menuIsOpen={false}
          primary={false}
          intent={'page'}
          onChange={() => 'Value Changed'}
          isSingleClickOption={true}
          disabled={false}
          value="available"
          optionComponent={({ selectedOption }: any) => (
            <div>
              <div>{selectedOption?.color}</div>
              <div>{selectedOption?.label}</div>
            </div>
          )}
        // customStyle={customStyle}
        >
          {({
            selectedOption,
            menuIsOpen,
            setMenuIsOpen,
          }: IUniversalDropdownChildren) => (
            <Button
              onClick={() => {
                setMenuIsOpen(!menuIsOpen)
                // action('Universal open/closed')(menuIsOpen)
              }}
              color={'white'}
              // bgColor={'black'}
              fullWidth={false}
            >
              {selectedOption?.label}
            </Button>
          )}
        </IconDropdown>
      </Box>*/}
      {/* <Box p="2em" bgColor="grey.50">
        <IconDropdown
          variant={'bread-crumb'}
          optionList={options}
          onChange={() => 'Value selected'}
          value="strawberry"
          width={'260px'}
        />
      </Box> */}

      <Box p="15px">
        <Breadcrumb options={breadCrumbOptions} onClick={handleBreadCrumbClick} />
      </Box>

    </>)
}

export default DoctorListView