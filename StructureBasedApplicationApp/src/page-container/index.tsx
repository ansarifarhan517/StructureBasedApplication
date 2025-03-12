import React, { lazy, Suspense } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'


const DoctorForm = lazy(() => import('../pages/doctor/DoctorForm'))
const DoctorListView = lazy(() => import('../pages/doctor/DoctorListView'))
const PatientForm = lazy(() => import('../pages/patient/PatientForm'))
const PatientListView = lazy(() => import('../pages/patient/PatientListView'))


const StyledPageContainer = styled.div`
  overflow-x: hidden;
  border-top: 1px solid ${({ theme }) => theme?.colors?.grey['A800']};
`


const PageContainer = () => (
  <StyledPageContainer>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate replace to="doctor-form/add-doctor" />} />
        <Route path="doctor-form" element={<Outlet />}>
          {/* Route for adding a new doctor */}
          <Route path="add-doctor" element={<DoctorForm />} />

          {/* Route for updating an existing doctor with doctorId as a path parameter */}
          <Route path="update-doctor/:doctorId" element={<DoctorForm />} />
        </Route>
        <Route path="doctor-list" element={<Outlet />}>
          <Route index element={<DoctorListView />} />
          {/* <Route path=":id" element={<DoctorForm />} /> */}
        </Route>
        <Route path="patient-form" element={<Outlet />}>
          <Route index element={<PatientForm />} />
          {/* <Route path=":id" element={<DoctorForm />} /> */}
        </Route>
        <Route path="patient-list" element={<Outlet />}>
          <Route index element={<PatientListView />} />
          {/* <Route path=":id" element={<DoctorForm />} /> */}
        </Route>
      </Routes>
    </Suspense>
  </StyledPageContainer>
)
export default PageContainer