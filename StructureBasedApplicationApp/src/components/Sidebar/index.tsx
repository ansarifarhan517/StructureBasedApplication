import React, { useCallback } from 'react'
import {  useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SidebarStyled = styled.div`
    height: auto;
    min-width: 15%;
    width: auto;
    border: 1px solid ${({ theme }) => theme?.colors?.grey['A800']};
  
    ul {
        margin: 0;
        padding: 0; 
        overflow: hidden;

        li {
            list-style: none;
            padding: 15px 25px;
            border-bottom: 1px solid ${({ theme }) => theme?.colors?.grey['A800']};
            cursor: pointer;
            
            &:hover {
                transform: scale(1.02);
            }
        } 
    }
`

const Sidebar = () => {
  const List = [
    {
      name: 'Dashboard',
      route: '/dashboard',
    },
    {
      name: 'Doctors',
      route: '/doctor-list',
    },
    {
      name: 'Patients',
      route: '/patient-list',
    },
    {
      name: 'Staff',
      route: '/staff-list',
    },
  ]
  const navigate = useNavigate()
  const handleNavigatePage = useCallback(
    (route: string) => {
      navigate(route)
    },
    [],
  )

  return (
    <SidebarStyled>
      <ul>
        {List.map(nav => (<li  role="button" key={nav?.name} onClick={() => handleNavigatePage(nav?.route)}>{nav?.name}</li>))}
      </ul>
    </SidebarStyled>
  )
}

export default Sidebar
