import Box from '@ui-library/components/atoms/Box'
import Breadcrumb from '@ui-library/components/molecules/Breadcrumb'
import React, { Dispatch, useEffect, useState } from 'react'
import { useBreadCrumbs } from './DoctorForm.utils'
import { useForm } from 'react-hook-form'
import SectionHeader from '@ui-library/components/molecules/SectionHeader'
import Grid from '@ui-library/components/atoms/Grid'
import FormFields from '@utils/components/FormFields'
import Card from '@ui-library/components/atoms/Card'
import IconButton from '@ui-library/components/atoms/IconButton'
import { faAngleRight, faCheckCircle, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FormWrapper, SectionHeaderContainer } from '@utils/components/FormFields/Form.styles'
import { DevTool } from '@hookform/devtools'
import axios from '@utils/axios'
import apiMappings, { IAPIResponse } from '@utils/apiMapping'
// import Checkbox from '@ui-library/components/atoms/Checkbox'
// import CheckboxFieldGroup from '@ui-library/components/atoms/CheckboxFieldGroup'
// import Loader from '@ui-library/components/atoms/Loader'
// import Position from '@ui-library/components/atoms/Position'
// import ProgressBar from '@ui-library/components/atoms/ProgressBar'
// import ProgressBarDraggable from '@ui-library/components/atoms/ProgressBarDraggable'
// import Radio from '@ui-library/components/atoms/Radio'
// import RadioGroup from '@ui-library/components/atoms/RadioGroup'
// import Typography from '@ui-library/components/atoms/Typography'
// import TextFilter from '@ui-library/components/atoms/TextFilter'
// import Toggle from '@ui-library/components/atoms/Toggle'
// import { AccordionContent, AccordionHeaderSubTitle, AccordionHeaderTitle } from '@ui-library/components/molecules/Accordian/Accordian.styled'
// import Accordian from '@ui-library/components/molecules/Accordian'
// import ButtonGroup from '@ui-library/components/molecules/ButtonGroup'
// import ButtonList from '@ui-library/components/molecules/ButtonList'
// import MultiSelect from '@ui-library/components/molecules/MultiSelect'
// import { tMultiSelectChildren } from '@ui-library/components/molecules/MultiSelect/interfaces'
// import { Button } from '@ui-library/components/atoms'
// import FontIcon from '@ui-library/components/atoms/FontIcon'
// import TextInput from '@ui-library/components/molecules/TextInput'
import useDynamicLabels from '@pages/common/DynamicLabels/useDynamicLabels'
import DYNAMIC_LABELS_MAPPING from '@pages/common/DynamicLabels/dynamicLabels.mapping'
import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { useTypedSelector } from '@redux/rootReducer'
import { IDoctorFormData } from './DoctorForm.model'
import { useLocation, useParams } from 'react-router-dom'
import { useToast } from '@ui-library/components/molecules/Toast'


const DoctorForm = () => {

  //----------------------> General Hooks
  const dynamicLabels = useDynamicLabels(DYNAMIC_LABELS_MAPPING.doctor)
  const { breadCrumbOptions, handleBreadCrumbClick } = useBreadCrumbs()

  //-----------------------> UseForm Hooks
  const formInstance = useForm<Record<string, any>>({
    mode: 'all',
    shouldUnregister: true,
  })

  const { handleSubmit, control, register, formState: { errors }, reset } = formInstance

  //------------------------> Routes Handlers
  const location = useLocation();
  const routeContains = (substring: string) => location.pathname.includes(substring);
  const { doctorId } = useParams();
  const toast = useToast();
  //-----------------------------> Redux Hooks
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const structure = useTypedSelector(state => state.doctor.form.structure)
  const isEditMode = useTypedSelector(state => state.doctor.form.isEditMode)
  const isStructureLoading = useTypedSelector(state => state.doctor.form.loading)
  const resetData = useTypedSelector(state => state.doctor.form.resetData)
  // const doctorData = useTypedSelector(state => state.doctor.form.doctorData)
  const sectionKeys = Object.keys(structure)

  //-----------------------------> Internal State
  const [formPayload, setFormPayload] = useState<FormData>()
  const [isDoctorDataLoading, setIsDoctorDataLoading] = useState<boolean>(false)
  const isLoading = React.useMemo(() => isStructureLoading || isDoctorDataLoading, [isStructureLoading, isDoctorDataLoading])
  const loaderRef = React.useRef<HTMLDivElement | null>(null)

  //--------------------------------------> Util Functions
  const fetchDoctorData = async (driverId: string | number) => {
    // dispatch({ type: '@@driverForm/SET_LOADING', payload: true })
    setIsDoctorDataLoading(true)
    try {
      const { data: { data, status } } = await axios.get<IAPIResponse<IDoctorFormData>>(`${apiMappings.driver.form.getDriver}?driverId=${driverId}`)
      if (status === 200) {
        dispatch({ type: '@@driverForm/SET_DOCTOR_DATA', payload: data })

        // const customFieldsFormData = getCustomFieldsFormData(data.customFieldsEntity)

        const _resetData = {
          ...resetData,
          // ...generateDriverFormData(data),
          //  ...customFieldsFormData,
          // shiftList: data?.shiftList?.map((timing, i) => ({
          //   id: i,
          //   fromValue: moment.utc(timing.startTime).tz(clientProperties?.TIMEZONE?.propertyValue).toDate(),
          //   toValue: moment.utc(timing.endTime).tz(clientProperties?.TIMEZONE?.propertyValue).toDate()
          // })),
          // dateOfBirth: data.dateOfBirth && moment.utc(data.dateOfBirth).tz(clientProperties?.TIMEZONE?.propertyValue).toDate(),
          // licenseValidity: data.licenseValidity && moment.utc(data.licenseValidity).tz(clientProperties?.TIMEZONE?.propertyValue).toDate()
        }
        reset({ ..._resetData })
        dispatch({ type: '@@doctorForm/SET_FORM_RESET_DATA', payload: _resetData })
        // dispatch({ type: '@@driverForm/SET_LOADING', payload: false })
        setIsDoctorDataLoading(false)
      }
    } catch (error) {
      console.log(error)
      // dispatch({ type: '@@driverForm/SET_LOADING', payload: false })
      setIsDoctorDataLoading(false)
      toast.add(error?.response?.data?.message || dynamicLabels.somethingWendWrong, 'warning', false)
    }
  }


  //--------------------------------------> Watchers
  useEffect(() => {
    if (!sectionKeys.length) {
      dispatch({ type: '@@doctorForm/FETCH_STRUCTURE' })
    }

    if (routeContains('updatedoctor') && doctorId) {
      dispatch({ type: '@@doctorForm/SET_EDIT_MODE', payload: true });
      // fetchDriverData(driverid);
    }
    else {
      reset({ ...resetData })
    }

  }, [])

  const hiddenSections: any = {}
  const onSubmit = async (data: any) => {
    console.log(data)
    debugger
    console.log(toast)
    toast.add(`Toast Added Successfully`, faCheckCircle, true)

  }

  // const eventsData = {
  //   eventGroup1: {
  //     events: [
  //       {
  //         clientRefMasterCd: 'event1',
  //         clientRefMasterDesc: 'Event One',
  //         checked: false
  //       },
  //       {
  //         clientRefMasterCd: 'event2',
  //         clientRefMasterDesc: 'Event Two',
  //         checked: true
  //       },
  //       {
  //         clientRefMasterCd: 'event3',
  //         clientRefMasterDesc: 'Event Three',
  //         checked: false
  //       },
  //       {
  //         clientRefMasterCd: 'event4',
  //         clientRefMasterDesc: 'Event Four',
  //         checked: true
  //       }
  //     ]
  //   },
  //   eventGroup2: {
  //     events: [
  //       {
  //         clientRefMasterCd: 'event5',
  //         clientRefMasterDesc: 'Event Five',
  //         checked: false
  //       },
  //       {
  //         clientRefMasterCd: 'event6',
  //         clientRefMasterDesc: 'Event Six',
  //         checked: true
  //       },
  //       {
  //         clientRefMasterCd: 'event7',
  //         clientRefMasterDesc: 'Event Seven',
  //         checked: false
  //       },
  //       {
  //         clientRefMasterCd: 'event8',
  //         clientRefMasterDesc: 'Event Eight',
  //         checked: false
  //       }
  //     ]
  //   },
  //   eventGroup3: {
  //     events: [
  //       {
  //         clientRefMasterCd: 'event9',
  //         clientRefMasterDesc: 'Event Nine',
  //         checked: true
  //       },
  //       {
  //         clientRefMasterCd: 'event10',
  //         clientRefMasterDesc: 'Event Ten',
  //         checked: false
  //       },
  //       {
  //         clientRefMasterCd: 'event11',
  //         clientRefMasterDesc: 'Event Eleven',
  //         checked: true
  //       },
  //       {
  //         clientRefMasterCd: 'event12',
  //         clientRefMasterDesc: 'Event Twelve',
  //         checked: false
  //       }
  //     ]
  //   }
  // };
  // const key = 'eventGroup1';
  // const setIsEventSelected = (name: any, index: any) => {
  //   console.log("name:", name)
  //   console.log("index:", index)
  // }
  // console.log(errors, "erros")

  // const [expanded, setExpanded] = React.useState('1')
  // const handleToggle = (accordianId: string, isExpanded?: boolean) => {
  //   setExpanded(isExpanded ? accordianId : '')
  // }

  // const handleToggleChange = (e: any) => {
  //   console.log("toggledata", e)
  // }

  // const tooltipProps = {
  //   messagePlacement: 'end',
  //   arrowPlacement: 'center',
  //   tooltipDirection: 'bottom'
  // }

  // const optionsWithTooltip = [
  //   { id: 'year', label: 'Year', selected: true, tooltipText: 'year' },
  //   { id: 'month', label: 'Month', tooltipText: 'month' }
  // ]


  // const options = [
  //   { value: 'ocean', label: 'Ocean', phoneNumber: '1234', age: '10' },
  //   { value: 'blue', label: 'Blue', phoneNumber: '455556', age: '12' },
  //   { value: 'purple', label: 'Purple', phoneNumber: '67778', age: '13' },
  //   { value: 'red', label: 'Red', phoneNumber: '89990', age: '14' },
  //   { value: 'orange', label: 'Orange', phoneNumber: '001323', age: '15' },
  //   { value: 'yellow', label: 'Yellow', phoneNumber: '99243452', age: '16' },
  //   { value: 'green', label: 'Green', phoneNumber: '120009', age: '18' },
  //   { value: 'forest', label: 'Forest', phoneNumber: '0000000', age: '20' },
  //   { value: 'slate', label: 'Slate', phoneNumber: '11111111', age: '30' },
  //   { value: 'silver', label: 'Silver', phoneNumber: '22222222', age: '40' }
  // ]
  // const selectedOptions = [
  //   { value: 'ocean', label: 'Ocean', phoneNumber: '1234', age: '10' },
  //   { value: 'blue', label: 'Blue', phoneNumber: '455556', age: '12' },
  //   { value: 'purple', label: 'Purple', phoneNumber: '67778', age: '13' },
  //   { value: 'red', label: 'Red', phoneNumber: '89990', age: '14' },
  //   { value: 'forest', label: 'Forest', phoneNumber: '0000000', age: '20' },
  //   { value: 'slate', label: 'Slate', phoneNumber: '11111111', age: '30' }
  // ]

  return (
    <FormWrapper>
      <Box p="15px">
        <Breadcrumb options={breadCrumbOptions} onClick={handleBreadCrumbClick} />
      </Box>
      <Box bgColor="white">
        <Card
          style={{
            minHeight: '80vh',
            position: 'relative',
          }}
        >
          {sectionKeys.length > 0 &&
            sectionKeys.map((sectionName) => {
              if (!hiddenSections[sectionName] &&
                Object.keys(structure[sectionName]).some((fieldKey) => structure[sectionName][fieldKey].permission)) {
                return (
                  <React.Fragment key={sectionName}>
                    <SectionHeaderContainer>
                      <SectionHeader headerTitle={sectionName}>
                        {sectionName === 'Permanent Address' && (
                          <div style={{ paddingLeft: '10px' }}>
                            {/* Additional content can go here */}
                          </div>
                        )}
                      </SectionHeader>
                    </SectionHeaderContainer>
                    <Grid
                      container
                      spacing="10px"
                      style={{
                        marginBottom: '15px',
                        gap: '10px',
                      }}
                    >
                      {Object.keys(structure[sectionName]).map((fieldName) => {
                        const meta = structure[sectionName][fieldName]
                        const { permission, fieldType, childNodes } = meta
                        if (!permission) return null

                        if (fieldType === 'address' && childNodes) {
                          return Object.entries(childNodes).map(([key, value]: [string, any]) => (
                            <Grid item key={key} xs={12} sm={6} md={3} className="grid-item">
                              <FormFields
                                name={key}
                                meta={value}
                                formInstance={formInstance}
                              />
                            </Grid>
                          ))
                        }

                        return (
                          <Grid item key={fieldName} xs={12} sm={6} md={3} className="grid-item">
                            <FormFields
                              name={fieldName}
                              meta={meta}
                              onChange={(e) => console.log(`${e} called from DoctorForm`)}
                              formInstance={formInstance}
                            />
                          </Grid>
                        )
                      })}
                    </Grid>
                  </React.Fragment>
                )
              }
              return null
            })}

          <Box horizontalSpacing="15px" display="flex" mt="30px">
            <IconButton
              id="doctorForm-actionBar-save"
              iconVariant={faFloppyDisk}
              style={{ padding: '0px 15px' }}
              onClick={handleSubmit(onSubmit)}
              primary
              iconSize={'lg'}
            >
              {isEditMode ? dynamicLabels.update : dynamicLabels.save}
            </IconButton>
            <IconButton
              id="doctorForm-actionBar-cancel"
              iconSize={'lg'}
              iconVariant={faXmark}
              style={{ padding: '0px 15px' }}
              onClick={() => handleBreadCrumbClick('home')}
            >
              {dynamicLabels.cancel}
            </IconButton>
          </Box>
          {/* <Checkbox
            id='myCheckbox'
            onChange={() => console.log('Checkbox Changed')}
            disabled={false}
            checked={false}
            label={'Farhan'}
            checkboxSize={'sm'}
            color={'green'}
          />
          <CheckboxFieldGroup
            id='defaultCheckboxFieldGroup'
            orientation={false}
            spacing={10}
            variant='form'
            width='100%'
            label={"My naem"}
            error={!!errors['checkboxGroup']}
            errorMessage='This is Farhan Checkbox'
            // labelColor={theme.colors.text.primary}
            {...register("checkboxGroup", {
              required: true,
            })}
          >
            <Grid container spacing='15px'>
              {eventsData[key]?.events.map((eventItem, i) => {
                return (
                  <Grid item xs={3} sm={3} md={3} lg={3} key={eventItem.clientRefMasterCd}>
                    <Checkbox
                      id={eventItem.clientRefMasterCd}
                      disabled={false}
                      checked={eventItem?.checked || false}
                      value={eventItem.clientRefMasterCd}
                      label={eventItem.clientRefMasterDesc}
                      checkboxSize={14}
                      // labelColor={theme.colors.text.primary}
                      style={{
                        fontSize: "13px",
                        fontStretch: 'normal',
                        fontStyle: 'normal'
                      }}
                      {...register(`${i}`, {
                        required: true,
                      })}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </CheckboxFieldGroup> */}

          {/* 
          <Position my='3em' p='3em' type='relative' border={1}>
            <ProgressBar
              incompleteColor={'#e9edf0'}
              completedColor={'#5698d3'}
              labelText={'1600/2500 both squares'}
              completedPercent={60}
              thickness={10}
            />
          </Position>

          <Position my='3em' p='3em' type='relative' border={1}>
            <ProgressBarDraggable
              incompleteColor={'#e9edf0'}
              completedColor={'#5698d3'}
              completedPercent={45}
              thickness={6}
              ovalRadius={8}
              notifySliderChange={() => { }}
            />
          </Position> */}

          {/* <Radio
            id='radio1'
            onChange={() => console.log('Radio Male Changed')}
            disabled={false}
            checked={false}
            name={'gender'}
            value={'Female'}
            label={'Female'}
            radioSize={'sm'}
            labelColor={'black'}
          /> */}

          {/* <Loader
            center={false}
            fadeBackground={false}
            speed={1}
          /> */}
          {/* <Box p='1em' bgColor='white'>
            <ButtonGroup
              data={optionsWithTooltip}
              onChange={() => console.log('onChange')}
              height={'40px'}
            />
          </Box>
          <Box p='1em'>
            <ButtonList
              listOfButtons={[
                {
                  variant: 'button',
                  children: 'Cancel',
                  intent: 'page',
                  primary: true,
                  onClick: () => console.log('value changed')
                },
                {
                  variant: 'button',
                  children: 'Ok',
                  intent: 'page',
                  onClick: () => console.log('value changed')
                }
              ]}
            />
          </Box>
          <>
            <Accordian id='1' expanded={expanded === '1'} onToggle={handleToggle} onToggleSwitch={handleToggleChange} switchTooltipMessage="Activate / Deactivate this setting" switchTooltipProps={tooltipProps} showToggleSwitch={true} toggleSwitchStyle={{ paddingRight: "15px" }}>
              {{
                header: (
                  <>
                    <AccordionHeaderTitle>
                      Minimum Capacity Utilization
                    </AccordionHeaderTitle>
                    <AccordionHeaderSubTitle>
                      Helps you manage Fleet utilization
                    </AccordionHeaderSubTitle>
                  </>
                ),
                content: (
                  <AccordionContent>
                    {Array(10)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i}>Line {i + 1} </div>
                      ))}
                  </AccordionContent>
                )
              }}
            </Accordian>
            <Accordian id='2' expanded={expanded === '2'} onToggle={handleToggle} onToggleSwitch={handleToggleChange} showToggleSwitch={true} toggleSwitchDisable={true} isToggleChecked={true}>
              {{
                header: (
                  <>
                    <AccordionHeaderTitle>Send Activation Link</AccordionHeaderTitle>
                    <AccordionHeaderSubTitle>
                      Send an activation link to the mobile number of a newly created
                      Delivery Associate.
                    </AccordionHeaderSubTitle>
                  </>
                ),
                content: (
                  <AccordionContent>
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i}>Line {i + 1} </div>
                      ))}
                  </AccordionContent>
                )
              }}
            </Accordian>
            <Accordian id='3' expanded={expanded === '3'} onToggle={handleToggle} onToggleSwitch={handleToggleChange}>
              {{
                header: (
                  <>
                    <AccordionHeaderTitle>
                      Delivery Associates Skill-sets configuration
                    </AccordionHeaderTitle>
                    <AccordionHeaderSubTitle>
                      Select specific skills while adding a Delivery Associate.
                      LogiNext Route planning will automatically assign the Shipments
                      that a Delivery Associate is skilled to perform.
                    </AccordionHeaderSubTitle>
                  </>
                ),
                content: (
                  <AccordionContent>
                    {Array(15)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i}>Line {i + 1} </div>
                      ))}
                  </AccordionContent>
                )
              }}
            </Accordian>
          </>

          <Position type='relative'>
            <MultiSelect
              id={'Colors'}
              width={'300px'}
              options={options}
              onChange={() => console.log('Multi Select changed')}
              style={{
                position: 'absolute',
                top: '0px',
                left: '145px'
              }}
              isLoading={false}
              isNoOption={false}
              menuOpen={false}
              selected={selectedOptions}
              allowSelectAll={false}
              maximumSelected={4}
              searchableKeys={[
                'value',
                'label',
                'phoneNumber',
                'age'
              ]}
            >
              {({ optionSelected, isMenuOpen, openMenu }: tMultiSelectChildren) => (
                <>
                  {openMenu}
                  <Button
                    id='id'
                    variant='button'
                    onClick={() => {
                      console.log(optionSelected)
                      openMenu(!isMenuOpen)
                      // (function ('MultiSelect opened/closed')(isMenuOpen))
                    }}
                  >
                    <React.Fragment>
                      <span>Open MultiSelect</span>
                      <FontIcon icon={faAngleRight} size='sm' />
                    </React.Fragment>
                  </Button>
                </>
              )}
            </MultiSelect>
          </Position>

          <Box p='1em'>
            <MultiSelect
              id={'Colors'}
              width={'300px'}
              options={options}
              onChange={() => console.log('Multi Select changed')}
              style={{
                position: 'absolute',
                top: 'auto',
                left: 'auto',
                marginTop: '-18px'
              }}
              isLoading={false}
              isNoOption={false}
              menuOpen={false}
              selected={selectedOptions}
              allowSelectAll={false}
              maximumSelected={5}
              defaultSelected={selectedOptions}
              searchableKeys={['label', 'phone']}
              resultLimit={10}
              onInputChange={() => console.log('on Input changed')}
            >
              {({ optionSelected, isMenuOpen, openMenu }: tMultiSelectChildren) => (
                <TextInput
                  id='id'
                  label='Color'
                  labelColor='black'
                  placeholder='Select ... '
                  error={false}
                  errorMessage={'Its an error Message'}
                  disabled={false}
                  onClick={() => {
                    openMenu(!isMenuOpen)
                    // action('MultiSelect open/closed')(isMenuOpen)
                  }}
                  value={
                    optionSelected && optionSelected?.length > 0
                      ? optionSelected?.length + ' Selected'
                      : ''
                  }
                  read-only
                />
              )}
            </MultiSelect>
          </Box> */}
        </Card>

        {/* <Card>
          <Typography title='This is Form RadioGroup Variant'
            fontSize="14px"
            color="black"
            text-transform="capitalize"
            fontWeight={500} />
          <RadioGroup
            id='RadioGroup2'
            orientation={false}
            spacing={10}
            variant='form'
            label='Gender'
            width={'50%'}
            labelColor={'black'}
            error={false}
            errorMessage={'Some Field Error'}
            required={false}
          >
            <Radio
              id='radio1'
              onChange={() => console.log('Radio 1 Changed')}
              disabled={false}
              checked={true}
              name={'gender'}
              value={'Male'}
              label={'Male'}
              radioSize={'sm'}
              labelColor={'black'}
            />
            <Radio
              id='radio2'
              onChange={() => console.log('Radio 2 Changed')}
              disabled={false}
              checked={true}
              name={'gender'}
              value={'Female'}
              label={'Female'}
              radioSize={'sm'}
              labelColor={'black'}
            />
            <Radio
              id='radio3'
              onChange={() => console.log('Radio 3 Changed')}
              disabled={false}
              checked={true}
              name={'gender'}
              value={'Others'}
              label={'Others'}
              radioSize={'sm'}
              labelColor={'black'}
            />
          </RadioGroup>

          <Box mx='auto' p='1em' bgColor='grey.50'>
            <TextFilter
              onEnter={() => console.log('search value entered')}
              width={'300px'}
            />
          </Box>

          <Box p='1em'>
            <Toggle
              id='137'
              label={'Switch 1'}
              labelColor={'black'}
              checked={false}
              onChange={() => console.log('Value changed')}
              disabled={false}
            />
          </Box>

        </Card> */}

      </Box>
      <DevTool control={control} />
    </FormWrapper>
  )
}

export default DoctorForm
