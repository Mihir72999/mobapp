
const Error = () => {
    const handleClick = () =>{
        console.log(window.location.pathname)
        window.location.pathname = '/'
    }
  return (
    <center className="flex flex-col h-[77.5vh] justify-center  bg-black text-white">
    <div className=" text-6xl" >404 Page Not Fond</div>
    <button className="flex w-[100px] my-14  justify-center py-2 mx-auto bg-sky-600" onClick={handleClick}>Go Back</button>
    </center>
  )
}

export default Error