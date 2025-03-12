import React from 'react'
import { IFormFieldProps, ISpecificFormFieldProps } from './interface'
import TextFormField from './TextFormFields'
import { RegisterOptions } from 'react-hook-form'
import { REGEXPS } from '@utils/Constants'
import NumberFormField from './NumberFormField'
import TextWithIconField from './TextFormFieldWithIcon'
import NumberFormFieldWithIconField from './NumberFormFieldsWithIcon'
// import AsyncDropdownFormField from './AsyncDropDownFormField'
import DropdownFormField from './DropDownFormField'
import AsyncDropdownFormField from './AsyncDropDownFormField'
import CheckboxFormField from './CheckboxFormField'
import DatePickerFormField from './DatePickerFormFields'

export const errorTypeMapping = {
  required: 'required',
  pattern: 'pattern',
  minLength: 'minlength',
  maxLength: 'maxlength',
  min: 'min',
  max: 'max',
}

const FormFields = (props: IFormFieldProps) => {

  const { meta, options, validate } = props

  const registerValidationRules = React.useMemo(() => {
    const obj: RegisterOptions = {
      required: meta.required,
      maxLength: Number(meta.validation?.maxlength?.args),
      minLength: Number(meta.validation?.minlength?.args),
      min: Number(meta.validation?.min?.args),
      max: Number(meta.validation?.max?.args),
      validate: validate && validate,
    }
    if (meta.validation?.pattern?.args) {
      obj.pattern = {
        value: new RegExp(String(meta.validation?.pattern?.args)
          ?.substring(1, meta.validation?.pattern?.args?.length - 1) || ''),
        message: meta.validation?.pattern?.message || '',
      }
    }

    if (meta.validation?.phoneNumber || meta.validation?.phonenumber || meta.fieldType === 'tel') {
      obj.pattern = {
        value: new RegExp('^[+]{0,1}[()\\-/0-9 ]*$'),
        message: meta.validation?.phoneNumber?.message ?? meta.validation?.phonenumber?.message ?? `Please enter valid ${meta.label}`,
      }

    }

    if (meta.fieldType === 'email') {
      obj.pattern = {
        value: /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,63}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,63})[\W]*$/,   //regex change to comma seprated email
        message: meta.validation?.email?.message ?? 'Invalid Email address',
      }
    }

    if (meta.fieldType === 'text') {
      obj.pattern = {
        value: REGEXPS.htmltags,   //regex change to comma seprated email
        message: 'HTML Tags are not allowed',
      }
    }
    return obj
  }, [meta])

  const formFieldProps: ISpecificFormFieldProps = {
    ...props,
    validationRules: registerValidationRules,
  }

  let renderField

  switch (meta.fieldType) {
    case 'number':

      if (meta.childLength === 0) {
        renderField = <NumberFormField {...formFieldProps} />
      }
      // else {
      //   renderField = <MultiNumberInput {...formFieldProps} />
      // }

      break
    case 'numberWithIcon':
      renderField = <NumberFormFieldWithIconField {...formFieldProps} />
      break
    case 'textWithIcon':
      renderField = (
        <TextWithIconField {...formFieldProps} />
      )
      break
    case 'email':
    case 'text':
      renderField = <TextFormField {...formFieldProps} />
      break

    case 'checkbox':
      renderField = (
        <CheckboxFormField {...formFieldProps} />
      )
      break
    case 'select':
    case 'dropdown':
      renderField = <DropdownFormField isSetSearchValue options={options} {...formFieldProps} />
      // renderField = <AsyncDropdownFormField {...formFieldProps} isSetSearchValue />
    
      // renderField = meta.lookupType === 'getPincode' ? (
    //   <AsyncDropdownFormField {...formFieldProps} />
    // ) : ( 
    //     meta.lookupType === 'getBranches' || meta.lookupType === 'getDistributionCenter' || meta.lookupType === 'getDistributionCenterSubBranch' ||
    //     meta.lookupType === "getVehiclesList" || meta.lookupType === "getDAList" || meta.lookupType === "getDriversList" || meta.lookupType === "getTripsBetweenDates"
    //   ? (
    //         <DropdownFormField  isSetSearchValue options={options} {...formFieldProps} />
    //   ) : (
    //     <DropdownFormField options={options} {...formFieldProps} />
    //   )
    //   )
    // break
  
    // case 'validity':
    // case 'dob':
    // case 'date':
    //   renderField = (
    //     <DatePickerFormField  {...formFieldProps} />
    //   )
    //   break
  }

  return renderField
}

export default FormFields