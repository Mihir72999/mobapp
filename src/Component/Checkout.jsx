import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, selectAll } from "../state/addSlice"
import { usePostOrderMutation, useRazorPayMutation } from "../state/authAdaptor"


const state = [
  'Dubai',
  'Abu dhabi',     
        'Sharjaha',
        'Ajman',
        'Fujairah',
        'Umm al Quain',
        'Ras al Khaimah'   
    ]
const RAZORPAY_API_KEY = 'rzp_test_aVX0BatHfyMi7T'
const Checkout = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectAll)
  const [razorPay ,{ isLoading } ] = useRazorPayMutation()
const [postOrder] = usePostOrderMutation()
const [selectState , setSelectState] = useState('')
const [detail , setDetail]  = useState({
    fname :'' ,
    lname:'',
    email:'',
    street:'',
    phone:'',
    town : '',
    pin: '',
    product:cartItem 
    
})

    


    const hadlePay = async() =>{
      const amount = Number(12000)
      const  {data:{order}} = await razorPay({amount})
      const id = order?.id
      
      const {fname , town , lname  , email , phone ,street , pin , product } = detail
      
       await postOrder({
        fname,
        lname,
        email,
        phone,
        state:selectState,
        street ,
        pin ,
        town,
        product ,
        orderId:id
       })
  

     
        var options = {
            
            key: RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: '',
            description: " Transaction",
            image: "",
            order_id: id , //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: `https://mobilecoverapi.onrender.com/callback`,
            prefill: {
              name: fname,
              email:email,
              contact: phone
          },
          notes: {
              "address": "Razorpay Corporate Office"
          },
          theme: {
            "color": "#3399cc"
          }
        };
        var rzp1 = new  window.Razorpay(options);
          rzp1.open();
         dispatch(clearCart())
    }
  return (
    <>
        
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Check Out And Procced To Pay
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                      <input type="text" value={detail.fname} onChange={(e)=>setDetail({...detail , fname:e.target.value})}  name="fname" id="fname"  placeholder="ex john doe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                       <input type="text" name="lname" value={detail.lname} onChange={(e)=>setDetail({...detail , lname:e.target.value})} id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="doe" />
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                       <input type="email" name="email" value={detail.email} onChange={(e)=>setDetail({...detail , email:e.target.value})} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="doe" />
                  </div>
                  <div>
                      <label htmlFor="Street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street</label>
                      <input type="text"  placeholder="1234 kings road" value={detail.street}  onChange={(e)=>setDetail({...detail,street:e.target.value})} name="Street" id="Street"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                  <div>
                      <label htmlFor="town" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">town</label>
                      <input type="text"   name="fname" id="town" value={detail.town} onChange={(e)=>setDetail({...detail , town:e.target.value})}  placeholder="ex john doe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label htmlFor="pin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin no</label>
                       <input type="number" name="pin" id="pin" value={detail.pin} onChange={(e)=>setDetail({...detail,pin:Number(e.target.value)})} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" />
                  </div>
                  <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                      <input type="number"  placeholder="012345678" name="phone" value={detail.phone} onChange={(e)=>setDetail({...detail,phone:Number(e.target.value)})} id="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                 <div>  
                  <label className="font-semibold">select your emirates</label>
                  <select  onClick={(e)=>setSelectState(e.target.value)} className="my-2 w-full py-2 px-2 border border-gray-300 rounded-md">
                   
                    {state.map((emirates , index)=><option value={emirates} key={index} >{emirates}</option>)}
                  </select></div>
                  <div>
                   {cartItem.map((e , i)=>{
                      return <div  key={i}>
                        <p>name: {e.name}</p>
                        <p>qty: {e.qty}</p>
                        <hr/>
                      </div>        
                   })}
                  </div>
                  <div>
                    <button disabled={!selectState.length} onClick={hadlePay} className="w-full px-3 py-2 bg-blue-700 disabled:bg-blue-400 text-white rounded-md">{ isLoading ? Loading... : Pay Now }</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
        </>
  )
}

export default Checkout
