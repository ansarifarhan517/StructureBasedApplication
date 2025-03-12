import React from 'react'
import { ISpecificFormFieldProps } from './interface'
import TextInput from '@ui-library/components/molecules/TextInput'
import { tMongoFieldValidation } from '../mongo/interface'

const NumberFormField = ({
  formInstance: { formState: { errors }, register, unregister },
  meta, name, defaultValue, onChange = () => { }, onBlur = () => { },
  validationRules }: ISpecificFormFieldProps) => {
  const renderCount = React.useRef(0)
  console.log('Numer Renderring: ', name, renderCount.current++)
  React.useEffect(() => () => {
    unregister(name)
  }, [])


  const getErrorMessage = (): string | undefined => {
    const errorKey = errors[name]?.type as tMongoFieldValidation

    if (errors[name]) {
      return errorKey === 'pattern'
        ? errors[name].message as string
        : meta.validation?.[errorKey]?.message as string
    }

    const metaErrorKey = meta.errorType
    return meta.validation?.[metaErrorKey]?.message as string
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
    type="number"
    // id={name}
    tooltipMesaage={meta.infoFlag && meta['infoTool'] ? meta['infoTool']?.[0]?.message : ''}
    tooltipDirection="top"
    messagePlacement={meta?.messagePlacement ?? 'center'}
    className={`formFieldWrapper-${name}`}
    placeholder={meta.label}
    label={meta.label}
    required={meta.required}
    disabled={!meta.editable}
    id={name}
    error={!!errors[name] || meta['isError']}
    errorMessage={getErrorMessage()}
    minLength={Number(validationRules.minLength) || undefined}
    maxLength={Number(validationRules.maxLength) || 255}
    // onBlur={(e: React.FocusEvent<HTMLInputElement>) => meta?.handleBlurEvent && meta?.handleBlurEvent(e.target.value, meta.id)}
    defaultValue={defaultValue}
  />
}

export default NumberFormField