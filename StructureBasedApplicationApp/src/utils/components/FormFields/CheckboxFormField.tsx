import React from 'react'
// import { CheckboxFieldGroup, Checkbox } from 'ui-library'

import { ISpecificFormFieldProps } from "./interface"
import { Controller } from 'react-hook-form'
import Box from '@ui-library/components/atoms/Box'
import Checkbox from '@ui-library/components/atoms/Checkbox'

const CheckboxFormField = ({
    formInstance: { control }, handler, name, meta }: ISpecificFormFieldProps) => {

    return (
        // <CheckboxFieldGroup id={name} label={meta.label}
        //   variant='form'
        //   required={meta.required}
        //   errorMessage={meta.validation?.required?.message}
        // >
        <Box display='flex' alignItems='center' fullHeight>
            <Controller
                control={control}
                name={name}
                render={({
                    field: { onChange, onBlur, value, name },

                }) => {
                    const handleChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
                        handler && handler?.(name)
                        onChange(checked ? 'Y' : 'N')
                    }
                    return <Checkbox
                        id={name}
                        label={meta.label}
                        checked={value === 'Y'}
                        checkboxSize='md'
                        disabled={!meta.editable}
                        onChange={handleChange}
                    />
                }}
            />
        </Box>
        // </CheckboxFieldGroup>
    )
}

export default CheckboxFormField