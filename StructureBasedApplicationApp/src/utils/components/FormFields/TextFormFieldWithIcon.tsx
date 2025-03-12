import React from 'react'
import TextInput from '@ui-library/components/molecules/TextInput'
import { faCalendar, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { ISpecificFormFieldProps } from './interface'
const TextWithIconField = ({
  formInstance: { formState: { errors }, register, unregister },
  meta, name,
  handler,
  toolTipText,
  onChange = () => { }, onBlur = () => { },
  validationRules }: ISpecificFormFieldProps) => {
  // const renderCount = React.useRef(0)
  // console.log('Text Field Renderring: ', name, renderCount.current++)
  console.log(handler)
  const [icon, setIcon] = React.useState<null | IconDefinition>(null)

  React.useEffect(() => {
    const loadIcon = async () => {
      if (meta.icon) {
        try {
          const importedIcon = await import('../../../../node_modules/@fortawesome/free-regular-svg-icons/faCalendar')
          setIcon(importedIcon.faCalendar)
        } catch (error) {
          console.error(`Error importing icon: ${error}`)
          setIcon(null)
        }
      }
    }

    loadIcon()
    return () => {
      unregister(name)
    }
  }, [])
  return <>
    <TextInput
      {...register(name, {
        ...validationRules,
        onChange: (e) => {
          onChange(e)
        },
        onBlur: (e) => { onBlur(e) },
      })}
      fullWidth
      variant="withIcon"
      className={`formFieldWrapper-${name}`}
      placeholder={meta.label}
      label={meta.label}
      required={meta.required}
      id={name}
      onClick={() => meta.readOnly && handler && handler(name)}
      error={!!errors[name]}
      errorMessage={errors[name]?.type === 'pattern' ? errors[name]?.message : meta?.validation?.[errors[name]?.type]?.message}
      maxLength={Number(validationRules.maxLength) || 255}
      iconStyle={{ cursor: 'pointer' }}
      iconVariant={icon ?? faCalendar}
      iconSize={meta.iconSize || 'sm'}
      onIconClick={() => handler && handler(name)}
      title={meta.infoFlag && meta['infoTool'] ? meta['infoTool']?.[0]?.message : toolTipText}
      disabled={!meta.editable}
      tooltipMesaage={toolTipText}
      displayTootltipOnIcon={true}
      readOnly={meta.readOnly}
    />
  </>
}

export default TextWithIconField