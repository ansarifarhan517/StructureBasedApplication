// import { faCalendar, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { Button } from '@ui-library/components/atoms'
// import Box from '@ui-library/components/atoms/Box'
// import FontIcon from '@ui-library/components/atoms/FontIcon'
// import TextInput from '@ui-library/components/molecules/TextInput'
// import InputField from '@ui-library/components/atoms/InputField'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import Box from '@ui-library/components/atoms/Box'
// import FontIcon from '@ui-library/components/atoms/FontIcon'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import '../sass/global.scss'

// const LoginApp = lazy(async () => await import(/* webpackChunkName: "loginApp" */'./login-app'))
const BrowseApp = lazy(async () => await import(/* webpackChunkName: "browseApp" */'./browse-app'))

const App: React.FC = () =>
//   const isUserLoggedIn = !!sessionStorage.getItem('userLoggedIn')
  (
    <Suspense fallback={<>Loading...</>}>
      <Router basename="/">
        {/* { isUserLoggedIn ? <BrowseApp /> : <LoginApp />} */}
        <BrowseApp />
        {/* <Button
          variant={'button'}
          intent={'default'}
          disabled={false}
          primary={true}
        >
        Default
        </Button>


        <div style={{ margin: '10px' }}>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent="center"
            alignItems="center"
            bgColor="grey.100"
            style={{
              width: '300px',
              height: '300px',
            }}
          >
            <Box
              bgColor="grey.300"
              m="10px"
              style={{
                width: '50px',
                height: '30px',
              }}
            >
            Box 1
            </Box>
            <Box
              bgColor="grey.300"
              m="10px"
              style={{
                width: '50px',
                height: '50px',
              }}
            >
            Box 2
            </Box>
            <Box
              bgColor="grey.300"
              m="10px"
              style={{
                width: '50px',
                height: '40px',
              }}
            >
            Box 3
            </Box>
          </Box>

        </div>

        {/* <h1>Input Field</h1>
        <Box mx="auto" p="1em" bgColor="grey.50">
          <InputField
            onChange={() => ('Value Changed')}
            type="text"
            placeholder="Please enter some text"
            fullWidth={false}
            error={true}
          />
        </Box> */}


        {/* 
        <Box>
          <FontIcon icon={faEnvelope} size="lg" color={'crimson'} hoverColor="green"/>
        </Box>
        <>
          <TextInput variant={'textArea'} contentEditable={true} label="Farhan" />
        </> */}

        {/* <TextInput
          label={'Username'}
          required={false}
          error={false}
          errorMessage={'This field is required'}
          tooltipMesaage={'Enter your username'}
          tooltipDirection={'bottom'}
          variant={'basic'}
        />


        <TextInput
          label="Username"
          required={false}
          error={true}
          errorMessage="This field is required"
          tooltipMesaage={'Enter your username'}
          tooltipDirection={'bottom'}
          variant="withIcon"
          iconVariant={faCalendar}
          iconSize="sm"
          onIconClick={() => alert('Icon clicked')}
        /> */}
      </Router>
    </Suspense>
  )


export default App
