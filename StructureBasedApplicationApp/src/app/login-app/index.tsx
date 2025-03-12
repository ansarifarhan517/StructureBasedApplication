import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Box from '@ui-library/components/atoms/Box'
import Card from '@ui-library/components/atoms/Card'
import IconButton from '@ui-library/components/atoms/IconButton'
import TextInput from '@ui-library/components/molecules/TextInput'
import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
  const formInstance = useForm<Record<string, unknown>>({
    mode: 'all',
    shouldUnregister: true,
  })

  const { register, handleSubmit, formState: { errors }, setValue } = formInstance

  const onSubmit = async (data: any) => {
    console.log(data) // Submit data on successful validation
  }

  return (
    <Card>
      <div className="container">
        <TextInput
          variant="basic"
          type="text"
          label="Username"
          placeholder="Please Enter Username"
          error={!!errors.Username} // Check if there's an error for Username
          errorMessage={errors.Username ? 'Please Enter Username' : undefined}
          {...register('Username', { required: true })} // Register with validation
          onChange={(e) => {
            setValue('Username', e.target.value) // Update value on change
          }}
        />
        <TextInput
          variant="basic"
          type="password"
          label="Password"
          placeholder="Please Enter Password"
          error={!!errors.Password} // Check if there's an error for Password
          errorMessage={errors.Password ? 'Please Enter Password' : undefined}
          {...register('Password', { required: true })} // Register with validation
          onChange={(e) => {
            setValue('Password', e.target.value) // Update value on change
          }}
        />
      </div>

      <Box horizontalSpacing="15px" display="flex" mt="30px">
        <IconButton
          id="loginSubmit"
          iconVariant={faRightToBracket}
          style={{ padding: '0px 15px' }}
          onClick={handleSubmit(onSubmit)} // Handle form submission
          primary
          iconSize={'lg'}
        >
                    Save
        </IconButton>
      </Box>
    </Card>
  )
}

export default Login
