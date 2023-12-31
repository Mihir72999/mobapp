import { memo} from "react"
import { Link } from "react-router-dom"
import { data } from "../../data"


const MainContent = () => {
  return (
<div>

{data.map(({title, description , url , href}, i)=>(
<div data-aos='fade-left' id='main' key={i} className="flex lg:mr-70 lg:flex-row flex-col mt-16">
   <img className="w-[300px] h-[200px]" src={url} alt='' /> 
  <div className="lg:max-w-[300px] lg:ml-16 ml-2 lg:mt-0 mt-5">
     <h1 className="text-xl font-bold">{title}</h1><p className='my-3'>{description}</p>
    <Link to={href} className="text-sm font-bold text-blue-500 ">Add To Cart</Link>
  </div>
 </div>
  
    ))}
    </div>
  )
}


const MainContents = memo(MainContent)

export default MainContents
