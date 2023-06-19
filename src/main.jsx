import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from "./Redux/store.js"
import { GoogleOAuthProvider } from '@react-oauth/google';

const client_id =import.meta.env.VITE_GOOGLE_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <GoogleOAuthProvider clientId="547107393948-1co0d5fnbftie84gtapku5ogm8m8big6.apps.googleusercontent.com">

<ToastContainer/>
    <App />
    </GoogleOAuthProvider>
  </Provider>,
)
