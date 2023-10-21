import { useEffect, useRef, useState  } from "react"
import { usePostRegisterMutation } from "../state/authAdaptor"
import { NavLink } from "react-router-dom"
import {GoogleAuthProvider ,getAuth, signInWithPopup } from 'firebase/auth'
import { apps } from "../hook/firebase"

const Register = () => {
  
  const [userName ,setUserName] = useState('')
 const [password , setPassword] = useState('')
 const [email,setEmail] = useState('')
 const handleChangeName = (e) =>setUserName(e.target.value)
 const handleChangePassword = (e) =>setPassword(e.target.value)
 const handleChangeEmail = (e) => setEmail(e.target.value)
  const [postRegister ,{isLoading , isError , error}] = usePostRegisterMutation()
 
//  const navigate = useNavigate()
const userRef = useRef()

  const  onHandlesubmit = (e) =>{
   e.preventDefault()
    postRegister({userName, email,password})
    setUserName('')
    setEmail('')
    setPassword('')
   }
   const handleRegisterWithGoogle = async(e) =>{
    try{
      e.preventDefault()
      const googlePrivider = new GoogleAuthProvider()
      const auth = getAuth(apps)
      const result = await signInWithPopup(auth , googlePrivider)
      const {displayName ,email , photoURL} =  result?.user
      postRegister({userName:displayName , email:email , image: photoURL , password:displayName })
    }catch(err){
      window.alert(`${err}`)
    }
   }
    useEffect(()=>{
    userRef.current.focus()
    
  },[])
  
  if(isLoading){
    return <div>...isLoading</div>
  }
 
  return (
    <div >
    {isError && <div  aria-live="assertive">{error.message}</div>}
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                      <input type="text" ref={userRef} value={userName} onChange={handleChangeName}  name="userName" id="userName" autoComplete="userName" placeholder="ex john doe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                       <input type="email" ref={userRef} value={email} onChange={handleChangeEmail} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" ref={userRef} value={password} onChange={handleChangePassword} autoComplete="current-password" placeholder="••••••••" name="password" id="password"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                  
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button onClick={onHandlesubmit} type="submit" className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <div>or</div>
                  <button className="hover:underline" onClick={handleRegisterWithGoogle}>Register with Google</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <NavLink to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</NavLink>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section></div>

  )
}

export default Register
