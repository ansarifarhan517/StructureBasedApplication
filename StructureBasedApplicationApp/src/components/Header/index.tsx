// import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
// import FontIcon from '@ui-library/components/atoms/FontIcon'
// import { Button } from '@ui-library/components/atoms'
import React from 'react'
import styled from 'styled-components'
// import Logo from '../../../assets/images/51534761.jpg'

const HeaderStyled = styled.header`
  height: 8%; // Ensure the height is enough for visibility
  width: 100%;
  background-color: ${({ theme }) => theme?.colors?.primary?.main}; // Fallback to blue if theme is missing
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoStyled = styled.h1`
    padding: 8px;
    background-color: ${({ theme }) => theme?.colors?.primary?.main};
    color: white;
    cursor: pointer;
    font-size: calc(1.275rem + 0.3vw);
    font-weight: 300;
    line-height: 1.2;
   
`

const RightEndButtonContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 5px 5px;
`

const Header = () => (
  <HeaderStyled>
    <LogoStyled>
      {/* <span>Medicare</span> */}
      {/* <FontIcon icon={faStethoscope} color="#5698d3" /> */}
    </LogoStyled>
    <RightEndButtonContainerStyled
    >
      {/* <Button variant="button" primary={false} intent="page">Profile</Button>
      <Button variant="button" primary={false} intent="page">Logout</Button> */}
    </RightEndButtonContainerStyled>

  </HeaderStyled>
)

export default Header
