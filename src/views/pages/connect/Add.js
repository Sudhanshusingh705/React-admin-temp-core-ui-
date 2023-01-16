// import React from 'react'
import axios from 'axios'
import React from 'react'
import {CButton, CCard, CCardBody, CCol, CContainer, CForm, CRow} from '@coreui/react'
import {cibCcAmex,cibCcApplePay,cibCcMastercard,cibCcPaypal,cibCcStripe,cibCcVisa,cifBr,cifEs,cifFr,cifIn,cifPl,cifUs,cilPeople,
} from '@coreui/icons'  
import {CAvatar,CProgress,CTable,CTableBody,CTableDataCell,CTableHead,CTableHeaderCell,CTableRow
} from '@coreui/react'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import CIcon from '@coreui/icons-react'

const Add = () => {
  const handleClick = async () => {
    // await axios.get("https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=739700438957-50eoaqg4qvho82hcukmrf910a13fs3od.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyt-analytics-monetary.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutubepartner-channel-audit&state=U9oPjGvWRaBFuLEqPBXsAhpqbCxWPM&prompt=consent&access_type=offline")
    //     .then((res) => console.log(res)).catch((err) => console.log(err))
    //     console.log(input)
        let tokenName = localStorage.getItem("token");
        let re = /'token': '(.*?)'/;
        let token = tokenName.match(re)[1];
        console.log(token);
        var YOUR_CLIENT_ID = '739700438957-50eoaqg4qvho82hcukmrf910a13fs3od.apps.googleusercontent.com';
        var YOUR_REDIRECT_URI = 'https://an2sldwgo0.execute-api.ap-south-1.amazonaws.com/stage1/onboarding/youtube/oauthcallback';
        var fragmentString = window.location.hash.substring(1);
      
        // Parse query string to see if page request is coming from OAuth 2.0 server.
        var params = {};
        var regex = /([^&=]+)=([^&]*)/g, m;
        while (m = regex.exec(fragmentString)) {
          params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        if (Object.keys(params).length > 0) {
          localStorage.setItem('oauth2-test-params', JSON.stringify(params) );
          if (params['state'] && params['state'] == 'try_sample_request') {
            trySampleRequest();
          }
        }
      
        // If there's an access token, try an API request.
        // Otherwise, start OAuth 2.0 flow.
        function trySampleRequest() {
          var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
          if (params && params['access_token']) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET',
                'https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true&' +
                'access_token=' + params['access_token']);
            xhr.onreadystatechange = function (e) {
              console.log(xhr.response)
              if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.response);
              } else if (xhr.readyState === 4 && xhr.status === 401) {
                // Token invalid, so prompt for user permission.
                oauth2SignIn();
              }
            };
            console.log(xhr.response)
            xhr.send(null);
          } else {
            oauth2SignIn();
          }
        }
        trySampleRequest()
      
        /*
         * Create form to request access token from Google's OAuth 2.0 server.
         */
        function oauth2SignIn() {
          // Google's OAuth 2.0 endpoint for requesting an access token
          var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
      
          // Create element to open OAuth 2.0 endpoint in new window.
          var form = document.createElement('form');
          form.setAttribute('method', 'GET'); // Send as a GET request.
          form.setAttribute('action', oauth2Endpoint);
      
          // Parameters to pass to OAuth 2.0 endpoint.
          var params = {'client_id': YOUR_CLIENT_ID,
                        'redirect_uri': YOUR_REDIRECT_URI,
                        'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                        'state': encodeURIComponent(token),
                        'include_granted_scopes': 'true',
                        'response_type': 'code'
                      };
    
      
          // Add form parameters as hidden input values.
          for (var p in params) {
            var input = document.createElement('input');
            input.setAttribute('type','visible');
            input.setAttribute('name', p);
            input.setAttribute('value', params[p]);
            form.appendChild(input);
          }
      
          // Add form to page and submit it to open the OAuth 2.0 endpoint.
          document.body.appendChild(form);
          form.submit();
        }
    // fetch('https://an2sldwgo0.execute-api.ap-south-1.amazonaws.com/stage1/public/user/login/',
    //   {
    //     method: 'POST',
    //     mode: 'cors',
    //     headers: {
    //       'Access-Control-Allow-Headers': '*',
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': '*',
    //       'Access-Control-Allow-Credentials': true,
    //       'Content-Type': 'application/json',
    //       'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbmdocmFAZ21haWwuY29tIiwiYWNjb3VudF9pZCI6InNpbmdocmEiLCJleHAiOjE2NzA4MDc1Njd9.YgKtutqWH3TyhicutOtQDFkCjrvIA1JZvQ-UpdaoRNU'
    //     },
    //     body: JSON.stringify({
    //       email: 'cnyadav@g.vom',
    //       password: 'chhaya'
    //     })
    //   }
    // )
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
  }
  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]


  return (
    <>
    <div className="bg-blur min-vh-400 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={11} lg={10} xl={10}>
            <CCard className="mx-6">
              <CCardBody className="p-4">
                <CForm>
                  <h3>Add Your Youtube Accounts</h3>
                  <div className="d-grid">
                    <CButton onClick={handleClick} color="success" shape="rounded-pill">Connect Account</CButton>
                  </div>
        <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>User</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                  <CTableHeaderCell>Usage</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                  <CTableHeaderCell>Activity</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {tableExample.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.user.name}</div>
                      <div className="small text-medium-emphasis">
                        <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                        {item.user.registered}
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>{item.usage.value}%</strong>
                        </div>
                        <div className="float-end">
                          <small className="text-medium-emphasis">{item.usage.period}</small>
                        </div>
                      </div>
                      <CProgress thin color={item.usage.color} value={item.usage.value} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" icon={item.payment.icon} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="small text-medium-emphasis">Last login</div>
                      <strong>{item.activity}</strong>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
           </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</div>
</>
  )
}

export default Add