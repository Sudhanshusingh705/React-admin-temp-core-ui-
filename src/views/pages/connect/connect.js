import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'

const connect = () => {
  const handleClick = () => {
    fetch('http://accounts.google.com/o/oauth2/auth?response_type=code&client_id=739700438957-50eoaqg4qvho82hcukmrf910a13fs3od.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyt-analytics-monetary.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutubepartner-channel-audit&state=vP0VGjpoBWtVfhy6L8mo9YIJ2mLqC5&prompt=consent&access_type=offline',
    {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNueWFkYXZAZy52b20iLCJhY2NvdW50X2lkIjoic2FkdmNpcyIsImV4cCI6MTY3MzMwODMyMX0.37I2JlfKdS-ou3f-1sr7m5DyJV5eBxUBoVnGC5_tUmQ'
    },
    body: JSON.stringify({
      email:"cnyadav@g.vom",
      password:"chhaya"
  })
  }
  )
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  }
  
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Add Your Accounts</h1>
                  <div className="d-grid">
                    <CButton onClick={handleClick} color="success">Hey Click me</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default connect;
