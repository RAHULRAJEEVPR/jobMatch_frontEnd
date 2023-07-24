import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store, persistor } from './Redux/store'; // Import the persisted store and persistor

import App from './App.jsx';
import './index.css';

const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> {/* Add PersistGate */}
      <GoogleOAuthProvider clientId={client_id}>
      <ToastContainer />  
            <App />
      </GoogleOAuthProvider>
    </PersistGate>
  </Provider>,
);
