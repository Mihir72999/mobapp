
import { Route, Routes } from 'react-router'
import './App.css'
import Product from './Component/Product'
import MainProduct from './Component/MainProduct'
import ShopingProduct from './Component/ShopingProduct'

import Error from './Component/404'
import Register from './Component/Register'
import LoginPage from './Component/LoginPage'
import useTitle from './hook/useTitle'
import Cart from './Component/Cart'
import Prefetchs from './hook/Prefetch'
import Checkout from './Component/Checkout'
import Callback from './Component/Callback'
import Loginagain from './Component/Loginagain'



function App() {
  
useTitle('Next Cover App')
  return (
    <>
      <Routes>
        <Route element={<Prefetchs/>}>
        <Route path='/main' element={<Product/>}  />
        <Route path='/product' element={<MainProduct />} />
        <Route path='/product/:id' element={<ShopingProduct />} />
        <Route path='/cart' element={<Cart />}  />
        <Route path='/checkout' element={<Checkout />}  />
       <Route path='/redirectrazorpay/page' element={<Callback/>}/>  
        </Route>
        <Route path ='/' element={<Register/>} />
        <Route path ='/login' element={<LoginPage/>} />
        <Route path='/loginagain' element={<Loginagain />} />
        <Route path='*' element={<Error/>} />
      </Routes>  

    </>
  )
}

export default App
