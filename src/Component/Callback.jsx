import { useSearchParams , Link} from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState } from 'react'
import {BiCopy , BiCheck} from 'react-icons/bi'
const Callback = () => {
    const [copy , setCopy] = useState(false)
    const [searchParams] = useSearchParams()
    const order_id = searchParams.get('order_id') 
  
      setTimeout(()=>setCopy(false),2000)
    
  return (
    <div className='flex flex-col items-center justify-center'>
        <h2>coppy your order id to track your order</h2>
        <h1 className='my-2'>Your order id : <strong>{order_id}</strong> 
        <CopyToClipboard className='mx-2' text={order_id} onCopy={()=>setCopy(true)}>
        {copy ? <button ><BiCheck fill='green'/></button> : <button><BiCopy fill='blue'/></button> }
        </CopyToClipboard></h1>
        <Link to={'/main'}><button className='underline text-blue-500'>Go Back To HomePage</button></Link>
    </div>
  )
}

export default Callback