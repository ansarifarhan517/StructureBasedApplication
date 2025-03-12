import React, { useState, useEffect, useCallback } from 'react'
import { Controller } from 'react-hook-form'
import { ISpecificFormFieldProps } from './interface'
import { fetchDropdownOptions, fetchPostDropdownOptions, prepareDataFromDropdownValue } from './utils'
import { errorTypeMapping } from './'
import DropDown from '@ui-library/components/molecules/Dropdown'

const DropdownFormField = ({
  name,
  meta,
  defaultValue,
  validationRules,
  options,
  formInstance: { control, formState: { errors }, watch, register, getValues },
  onChange: onChangeFromProps,
  isSetSearchValue = false,
  requiredError,
  scrollToRef = false,
  isSortable = true,
}: ISpecificFormFieldProps) => (
  <Controller
    name={name}
    control={control}
    rules={validationRules}
    render={({
      field: { onChange, onBlur, value, name },

    }) => {
      const [optionList, setOptionList] = React.useState<{ value: any, label: string, title?: any, description?: any }[]>([])
      const [editModeOptionList, setEditModeOptionList] = React.useState<{ value: any, label: string }[]>([])
      const [isDropdownLoading, setIsDropdownLoading] = useState<boolean>(false)
      const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(undefined)
      const [optionsMapping, setOptionsMapping] = useState<Record<string, any>>({})
      const [cacheValue, setCacheValue] = useState<string>('')
      const [isManuallyAdded, setIsManuallyAdded] = useState<boolean>(false)
      const country = watch(meta.countryFieldName || '')
      const clientBranch = watch(meta.clientBranchName || '')
      const thisDDComponentRef = scrollToRef ? React.useRef<HTMLSpanElement>() : null

      useEffect(() => {
        if (options && options?.length > 0) {
          setOptionList(options)
          const mapping: Record<string, unknown> = {}
          options?.forEach((option: any) => {
            mapping[`${option.id}`] = option
          })
          setOptionsMapping(mapping)
        }

      }, [options])


      useEffect(() => {
        if (meta.lookupType === 'getStates' && meta.countryFieldName) {
          setOptionList([])
        }
      }, [country])

      useEffect(() => {
        if (value?.id && (value?.name || value?.value)) {
          setEditModeOptionList([{
            value: value.id,
            label: value.name || value.value,
          }])
        } else if (defaultValue?.id && (defaultValue?.name || defaultValue?.value)) {
          setEditModeOptionList([{
            value: defaultValue.id,
            label: defaultValue.name || defaultValue.value,
          }])
        }

        //want Structure that has countryFieldName, dropdownValues, dropdownOptions, handleBlurEvent

        // if (meta.customField) {
        //     setOptionList(
        //         Object.keys(meta.dropdownValues || {})
        //             .map(key => ({
        //                 value: key,
        //                 label: meta?.dropdownValues?.[key] || key,
        //             })),
        //     )
        // }
      }, [value, meta.dropdownValues, defaultValue])

      const handleMenuOpen = async () => {
        setIsMenuOpen(true)
        if (meta.dropdownOptions) {

          setIsDropdownLoading(true)
          const { options, mapping } = prepareDataFromDropdownValue(meta.dropdownOptions)
          setOptionsMapping(mapping)
          setOptionList(options)
          setIsDropdownLoading(false)

        }
        else if (optionList?.length === 0 && !((meta.lookupType === 'getSuperClientParentBranch' || meta.lookupType === 'getReportingManagerList' || meta.lookupType === 'selectTrip' || meta.lookupType === 'getOrdersByTrip') && !(country?.id || clientBranch?.id))) {
          setIsDropdownLoading(true)
          let optionParam = undefined
          if (meta.lookupType === 'getTimeZone') {
            if (getValues('BASECOUNTRY')) {
              optionParam = getValues('BASECOUNTRY')
            } else if (getValues('baseCountry')) {
              optionParam = getValues('baseCountry')
            }
          }
          try {
            let options, mapping
            if (meta.httpMethod === 'POST') {
              const values = await fetchPostDropdownOptions(meta.lookupType || '', meta.lookUpOptionParam, meta.httpPostPayload)
              options = values.options; mapping = values.mapping
            } else {
              const values = await fetchDropdownOptions(meta.lookupType || '', optionParam)
              options = values.options; mapping = values.mapping
            }
            if (meta.lookupType === 'getCountries') {
              //   store.dispatch({
              //     type: "@@shipperPreferenceForm/SET_COUNTRIES",
              //     payload: Object.values(mapping)
              //   })
            }
            if (meta.lookupType === 'getDateFormats') {
              //   store.dispatch({
              //     type: "@@shipperPreferenceForm/SET_DATEFORMAT",
              //     payload: mapping
              //   })
            }
            if (meta.lookupType === 'getBaseLanguage') {
              //   store.dispatch({
              //     type: "@@shipperPreferenceForm/SET_BASELANGUAGE",
              //     payload: mapping
              //   })
            }
            setOptionsMapping(mapping)
            if (options?.length > 20) {
              // To improve UX and start displaying 20 records immediately
              setOptionList([...options].splice(0, 20))
              setTimeout(() => {
                setOptionList(options)
              }, 300)
            } else {
              setOptionList(options)
            }
            setIsDropdownLoading(false)
          } catch (err) {
            console.log(err)
            setIsDropdownLoading(false)
          }
        }
      }

      const handleMenuClose = () => {
        setIsMenuOpen(undefined)
        onBlur()
        if (cacheValue) {
          setIsManuallyAdded(true)
        } else {
          setIsManuallyAdded(false)
        }
      }

      const handleCrossReset = (inputValue: string) => {
      }

      const handleOnInputChange = (inputValue: string) => {
        if (inputValue === '')
          setCacheValue(inputValue)
      }

      const handleBlur = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
        if (isSetSearchValue && cacheValue !== '') {
          setOptionList(o => [...o, {
            value: cacheValue,
            label: cacheValue,
            name: cacheValue,
            id: cacheValue,
          }])
          onChange({
            name: cacheValue,
            id: cacheValue,
            clientNodeAddressCd: cacheValue,
          })
        }
        setCacheValue('')
        event.stopPropagation()
      }, [cacheValue])

      const scrollToRefFn = (thisDDComponentRef: any) => {
        if (scrollToRef && thisDDComponentRef) {
          // Register the field with the provided validation rules
          register(meta.id, validationRules)

          // Use a focus function if needed
          const focus = () => {
            thisDDComponentRef?.current?.scrollIntoView({ behavior: 'smooth' })
          }

          // You may need to call focus when you want to focus the input.
          // Consider calling focus at the appropriate event, such as onClick.
          focus()
        }
      }

      return (
        <>
          {scrollToRef && <span ref={thisDDComponentRef as React.RefObject<HTMLSpanElement>} style={{
            position: 'absolute',
            top: -100,
            left: 0,
          }} />}
          {isSetSearchValue ? (
            <div onBlur={(event) => handleBlur(event)}>
              {/* {console.log(`value-${meta.lookupType}`, meta.customField ? value : value?.id)} */}
              <DropDown
                required={meta.required}
                placeholder={meta.label}
                label={meta.label}
                variant="form-select"
                isSortable={isSortable}
                onChange={(value: string) => {
                  setIsMenuOpen(undefined)
                  if (value) {
                    value && meta?.handleBlurEvent && meta?.handleBlurEvent(optionsMapping[value].name, meta.id)
                    value && onChange(meta.customField ? value : optionsMapping[value])
                    value && onChangeFromProps && onChangeFromProps(optionsMapping[value])
                  } else {
                    meta?.handleBlurEvent && meta?.handleBlurEvent(undefined, meta.id)
                    onChange(null)
                    onChangeFromProps && onChangeFromProps(optionsMapping[value])
                    handleCrossReset(value)
                  }
                }}
                optionList={optionList.length === 0 ? editModeOptionList : optionList}
                loading={isDropdownLoading}
                isMenuOpen={isMenuOpen}
                disabled={!meta.editable}
                onMenuOpen={handleMenuOpen}
                onMenuClose={handleMenuClose}
                //   showDropdownIndicator={fieldArray.indexOf(meta.id) !== -1 ? false : true}
                //   showNoDataText={fieldArray.indexOf(meta.id) !== -1 ? false : true}
                //   showCrossIcon={fieldArray.indexOf(meta.id) !== -1 && isManuallyAdded ? false : true}
                showDescription={true}
                value={meta.customField ? value : value?.id}
                error={requiredError ?? !!errors[name]}
                errorMessage={requiredError ? `${meta.label} is mandatory` : meta.validation?.[errors[name]?.type]?.message}
                onInputChange={handleOnInputChange}
              />
            </div>) : (
            <DropDown
              required={meta.required}
              placeholder={defaultValue?.value ? defaultValue.value : meta.label}
              label={meta.label}
              variant="form-select"
              isSortable={isSortable}
              onChange={(value: string) => {
                setIsMenuOpen(undefined)
                if (value) {
                  value && meta?.handleBlurEvent && meta?.handleBlurEvent(optionsMapping[value].name, meta.id)
                  value && onChange(meta.customField ? value : optionsMapping[value])
                  value && onChange && onChange(optionsMapping[value])
                } else {
                  meta?.handleBlurEvent && meta?.handleBlurEvent(undefined, meta.id)
                  onChange(undefined)
                  onChange && onChange(optionsMapping[value])
                  handleCrossReset(value)
                }
              }}
              optionList={optionList.length === 0 ? editModeOptionList : optionList}
              loading={isDropdownLoading}
              isMenuOpen={isMenuOpen}
              disabled={!meta.editable}
              onMenuOpen={handleMenuOpen}
              onMenuClose={handleMenuClose}
              {...scrollToRefFn(thisDDComponentRef)}
              showDescription={true}
              value={defaultValue?.value ? defaultValue?.value : meta.customField ? value : value?.id}
              error={requiredError || !!errors[name] || meta['customValidationError']}
              errorMessage={requiredError ? `${meta.label} is mandatory` : meta['customValidationError'] ? meta['customValidationErrorMessage'] : meta.validation?.[errorTypeMapping[errors[name]?.type]]?.message}
              defaultValue={defaultValue?.value}
              tooltipMessage={meta.infoFlag && meta['infoTool'] ? meta['infoTool']?.[0]?.message : ''}
              align={meta['align'] || 'center'}
            />
          )}
        </>
      )
    }}
  />)

export default DropdownFormField