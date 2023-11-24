import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store , persist }from './state/store'

import { PersistGate } from 'redux-persist/integration/react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar from './Component/Navbar.jsx'
// ..

AOS.init()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persist} loading={null}>
       <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
       </PersistGate>
    </Provider>
  </React.StrictMode>,
)
