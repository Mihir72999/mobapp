import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store , persist }from './state/store'

import { brandmodelSlice } from './state/brandmodelSlice.js'
import { expandedSlice } from './state/expandedSlice.js'
import { PersistGate } from 'redux-persist/integration/react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import  CounterProvider  from './state/CounterProvider'
import Navbar from './Component/Navbar.jsx'
// ..

AOS.init()

store.dispatch(brandmodelSlice.endpoints.getBrandmodel.initiate())
store.dispatch(expandedSlice.endpoints.getProduct.initiate())


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persist} loading={null}>
        <CounterProvider>
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
      </CounterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
