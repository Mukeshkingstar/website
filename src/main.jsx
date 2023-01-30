import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Auth0Provider
    domain="mukeshkingstar.us.auth0.com"
    clientId="oxsk37baXANlfxpCcZKUdBjqUdILt37l"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><Nav/>
    <App />
  </Auth0Provider>
  </BrowserRouter>,
)
