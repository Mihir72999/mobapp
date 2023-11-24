import { memo } from "react"
import { Link } from "react-router-dom"

const url = 'https://5.imimg.com/data5/SELLER/Default/2022/4/TI/OH/ZT/68048504/printed-mobile-cover-500x500-500x500.jpg'
const MainContent = () => {
  
  return (
<div>
<div data-aos='fade-left' id='main' className="flex lg:mr-70 lg:flex-row flex-col mt-16">
   <div className=""><img className="w-[300px] h-[200px]" src={url} alt='' /> </div>
  <div className="lg:max-w-[300px] lg:ml-16 ml-2 lg:mt-0 mt-5">
    <h1 className="text-xl font-bold">COMMERCIAL SERVICE</h1>
    <p className='my-3'> Elevate your phone style and protection with our product. Crafted with precision,
       this backcover seamlessly combines fashion and functionality.
        Whether you are a trendsetter or a minimalist,
       our collection offers designs to match your unique taste.</p>

       <Link to='/product' className="text-sm font-bold text-blue-500 ">Add To Cart</Link>
  </div>
 

  </div>
  <div data-aos='fade-left' data-aos-delay='1000' className="flex lg:mr-70 lg:flex-row flex-col mt-16">
   <div className=""><img className="w-[300px] h-[200px]" src={url} alt='' /> </div>
  <div className="lg:max-w-[300px] lg:ml-16 ml-2 lg:mt-0 mt-5">
    <h1 className="text-xl font-bold">COMMERCIAL SERVICE</h1>
    <p className='my-3'> Elevate your phone style and protection with our product. Crafted with precision,
       this backcover seamlessly combines fashion and functionality.
        Whether you are a trendsetter or a minimalist,
       our collection offers designs to match your unique taste.</p>

       <Link className="text-sm font-bold text-blue-500 ">Add To Cart</Link>
  </div>
 

  </div>
    </div>
  )
}


const MainContents = memo(MainContent)

export default MainContents
