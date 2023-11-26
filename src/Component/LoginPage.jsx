import { useState } from "react"
import { useLoginMutation } from "../state/authAdaptor"

import {NavLink, useNavigate} from 'react-router-dom'
import LoadingBar from "react-top-loading-bar"
import useTitle from "../hook/useTitle"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { apps } from "../hook/firebase"

const LoginPage = () => {
  useTitle("Login here")
  const [progress , setProgress] = useState(0)
  const [ email , setEmail ] = useState('')
const [password, setPassword] = useState('')
const [login ,{isLoading , isError ,error }] = useLoginMutation()
const navigate = useNavigate()


const handleSubmit = async(e) =>{
  try{
     e.preventDefault()
    await login({email,password})
    setEmail('')
    setPassword('')
    setProgress(100)
    navigate('/main')
    
   
  }catch(err){

    if(error?.message){
           localStorage.clear()
    }}}
  const handleGoogleSignin = async(e) =>{
    try{
      e.preventDefault()
      const googlePrivider = new GoogleAuthProvider()
      const auth = getAuth(apps)
      const result = await signInWithPopup(auth , googlePrivider)
      const {displayName ,email } =  result?.user
       await login({email:email,password:displayName}).then(()=>navigate('/main'))
       

    }catch(err){
      window.alert(`user not found | ${err}`)
    }
  }  
    
if(isLoading){
  return <LoadingBar
  color="#f11946"
  height={8}
  progress={progress}
 onLoaderFinished={()=>setProgress(0)}
  />
}

  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
           { isError ? <h3 className="text-red-500" aria-live="assertive">{error.message}</h3> :  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login Account
              </h1> }
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                       <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  name="email" autoCapitalize="off" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off" placeholder="••••••••" name="password" id="password"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                  
                  <div className="flex items-start">
                      {/* <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div> */}
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300"> <NavLink className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/loginagain">Forgot the Password</NavLink></label>
                      </div>
                  </div>
                  <button  type="submit" className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login to account</button>
                  <div>or</div>
                  <button onClick={handleGoogleSignin}> login with google </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      not accounnt? <NavLink to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</NavLink>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section></>
  )
}

export default LoginPage
