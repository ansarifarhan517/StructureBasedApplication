import React from 'react'
import { ISpecificFormFieldProps } from './interface'
import TextInput from '@ui-library/components/molecules/TextInput'
import { tMongoFieldValidation } from '../mongo/interface'

const TextFormField = ({
  formInstance: { formState: { errors }, register, unregister },
  meta, name, defaultValue, onChange = () => { }, onBlur = () => { },
  validationRules }: ISpecificFormFieldProps) => {

  React.useEffect(() => () => {
    unregister(name)
  }, [])

  const getErrorMessage = () => {
    const errorKey = errors[name]?.type as tMongoFieldValidation
    if (errors[name]) {
      return errorKey === 'pattern'
        ? errors[name].message
        : meta.validation?.[errorKey]?.message
    }
    const metaErrorKey = meta.errorType
    return meta.validation?.[metaErrorKey]?.message
  }


  return <TextInput
    {...register(name, {
      ...validationRules,
      onChange: (e) => {
        onChange(e)
      },
      onBlur: (e) => { onBlur(e) },
    })}
    fullWidth
    tooltipMesaage={meta.infoFlag && meta['infoTool'] ? meta['infoTool']?.[0]?.message : ''}
    tooltipDirection="top"
    messagePlacement={meta?.messagePlacement ?? 'center'}
    className={`formFieldWrapper-${name}`}
    placeholder={meta.label}
    label={meta.label}
    required={meta.required}
    disabled={!meta.editable}
    id={name}
    error={!!errors[name]}
    errorMessage={getErrorMessage()}

    minLength={Number(validationRules.minLength) || undefined}
    maxLength={Number(validationRules.maxLength) || 255}
    defaultValue={defaultValue}
  />
}

export default TextFormField