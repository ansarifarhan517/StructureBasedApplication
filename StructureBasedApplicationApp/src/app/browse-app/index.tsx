import React from 'react'
import PageContainer from '../../page-container'
import styled from 'styled-components'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
// import './style.scss'


const MainContainerStyled = styled.main`
    height: 92%;
    width: 100%;
    display: flex;

`
const BrowseApp: React.FC = () => (
  <>
    <Header />
    <MainContainerStyled>
      <Sidebar />
      <PageContainer />
    </MainContainerStyled>
  </>
)

export default BrowseApp