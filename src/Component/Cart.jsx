import { Link } from "react-router-dom"
import { FcHome } from 'react-icons/fc'
import { LiaProductHunt } from 'react-icons/lia'
import { deleteCart, selectAll } from "../state/addSlice"
import { useDispatch, useSelector } from "react-redux"
import {AiOutlineDelete} from 'react-icons/ai'
import Formate from "./Formate"
import PriceReducer from "./PriceReducer"
import actualTax from "./actualTax"
import { memo } from "react"


const Carts = () => {


  const item = useSelector(selectAll)
  

  const actualTaxes = actualTax(item)


    const dispatch = useDispatch()
    const subTotal = PriceReducer(item)
    const Delivery = subTotal < 300 ? 50 : 0 
    


   const price = Formate(subTotal +  Delivery + actualTaxes )
  
  
   const content = (
   item && Object.keys(item).map((e, i)=>{
  
    return <tr key={i}>
        <td className="border-2 border-white py-2 px-1 border-y-sky-500">{item[e].name}</td>
        
        <td className="border-2 border-white border-y-sky-500">{item[e].new ? item[e].brandmodel + item[e].new : item[e].brandmodel}</td>

        <td className="border-2 border-white border-y-sky-500">{Formate(item[e].price)}</td>
        <td className="border-2 border-white border-y-sky-500">{item[e].qty}</td>
        <td className="border-2 border-white border-y-sky-500"> <AiOutlineDelete
        onClick={()=>dispatch(deleteCart({id:item[e].id}))}
        className="cursor-pointer text-2xl mx-auto"/></td>

    </tr>
    
   }) 
    
   )

  return (
    <>
     <div className='bg-black text-white'>
         <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto  flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <Link to='/' className="mr-2 text-sm font-medium text-white"><FcHome /></Link>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Link to='/product' className="mr-2 text-sm font-medium text-white"><LiaProductHunt /></Link>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a aria-current="page" className="font-medium text-white hover:text-gray-600">cart</a>
            </li>
          </ol>
        </nav>
    {item.length > 0 &&  <table  className="m-auto  my-10 lg:w-[1000px] w-auto text-sm lg:text-base text-center lg:scale-100 scale-90">
    <thead  className="w-[1000px]  bg-black text-white">
        <tr  >
         <th className="border-2 py-3 w-[400px] border-white border-y-sky-500">name</th>
         
         <th className="border-2 w-[250px] border-white border-y-sky-500">brandmodel</th>
         <th className="border-2 w-[150px] border-white border-y-sky-500">price</th>

         <th className="border-2 w-[150px] py-3 border-white border-y-sky-500">qty</th>
         <th className="border-2 w-[150px] border-white border-y-sky-500">delete</th>   
        </tr>
     </thead>
     <tbody  >
        { content}
     </tbody>
     
  </table> }
{!item.length && <div className="flex justify-center text-3xl text-sky-500 my-5 ">No item in cart</div>
  }
  {item.length > 0 && <div className="flex flex-col text-sm lg:text-base justify-center border-2 m-auto py-2 border-sky-700 w-64 px-4">
 <div>toalPrice :<em>{Formate(subTotal)}</em> </div>
 <div > Toal Gst : <em>{ Formate(actualTaxes)}</em></div>
 <div> Delivery Charge : {Delivery === 0 ? <del>{Formate(Delivery)} </del> : <em>{Formate(Delivery)}</em>} </div>
 <div> subTotal : <em> {price } </em></div>
  </div>
  
  }
  {item.length > 0 &&
  <div className="flex justify-center ">
   <Link to={`/checkout`}> <button className="bg-blue-400 text-white px-5 py-2 rounded-md my-5" >checkout</button></Link>
  </div>
  }

  <div className="lg:scale-100 scale-90 lg:text-base text-sm py-1 px-2 my-14 bg-green-900 w-fit mx-auto"><strong>Notice : </strong><span>we are charging Devlivery for 50 Rupees flat but you
    get free Delivery above 300 Rupees Shopping on toalPrice not on subtotal and alse charging gst 5% 
    </span></div>
    </div>
    </>
  )
}
const Cart = memo(Carts)
export default Cart