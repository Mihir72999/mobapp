import { memo } from 'react'
import {RiContrastFill} from 'react-icons/ri'
import PropTypes from 'prop-types'


const item = [
  {icon : < RiContrastFill/> , name:'Unleashing the Power of Online Shopping'},
  {icon : < RiContrastFill/> , name:'Discover a World of Unbeatable Deals'},
  {icon : < RiContrastFill/> , name:'Where Shopping Dreams Come True'},
  {icon : < RiContrastFill/> , name:'Bringing Convenience to Your Fingertips'},
  {icon : < RiContrastFill/> , name:'Your Gateway to Endless Retail Possibilities'},
  {icon : < RiContrastFill/> , name:'Embrace Innovation in E-commerce'},
  {icon : < RiContrastFill/> , name:'Explore, Click, and Shop with Confidence'},
  {icon : < RiContrastFill/> , name:'Revolutionizing the Way You Shop Online'},
  {icon : < RiContrastFill/> , name:'Elevate Your Shopping Experience'},
  {icon : < RiContrastFill/> , name:'Unraveling the Future of Retail'},

]

const Content = (props) => {
  return (
    <>
    <div className="lg:mt-10 mt-0">
      <h1 data-aos='slide-left' className="text-3xl font-bold text-gray-700 my-6">{props.title}</h1>
      <p data-aos='slide-left' className="mb-6 text-gray-500">{props.description}</p>
    
      {item.map((e,i)=>{
        return<div key={i} className='flex items-center my-4 text-[1.1rem] text-sky-500 gap-4'>
        <div data-aos='fade-right' data-aos-delay='500'>{e.icon}</div>
        <div data-aos='fade-right' data-aos-delay='1000'>{e.name}</div>
        </div>
      })}
    
    </div>


    </>
  )
}
Content.prototype = {
  title:PropTypes.string,
  description:PropTypes.string
}
 const Contents = memo(Content)
export default Contents
