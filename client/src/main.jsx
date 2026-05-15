import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(

  <GoogleOAuthProvider clientId="948386482996-n6kujhqgllgg1akhqlcctu58akkpsnrk.apps.googleusercontent.com">

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </GoogleOAuthProvider>

)