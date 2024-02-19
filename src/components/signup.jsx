import { useForm } from "react-hook-form"
import { Button, Input } from "./Index"
import authServices from "../AppwriteConfig/Auth"
import { useDispatch, useSelector } from "react-redux"
import { setLoading, sliceLogin } from "../redux/userSlice"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { setDark } from "../redux/darkSlice"
import { FaMoon } from "react-icons/fa"
import { IoMdSunny } from "react-icons/io"


const Signup = () => {

  const dark = useSelector((state) => state.dark.dark)
  const dispatch = useDispatch();
  const { colors } = useSelector(state => state.color)
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  const handleLogin = (data) => {
    dispatch(setLoading(true))
    authServices.createAccount(data).then(data => {
      if (data) {
        dispatch(sliceLogin({ ...data }))
        navigate('/')
      } else console.log('Hello World');
    }).catch((error) => {
      console.log(error)
    }).finally(()=>dispatch(setLoading(false)))
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(dark)
  }, [dark])

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100 dark:bg-dark ">
      <div className="relative bg-white shadow-md w-full sm:w-[30rem] h-[23rem] flex flex-col gap-5 items-center sm:rounded-md dark:bg-lightBlack1 dark:text-gray-100">
        <form className=" w-full flex flex-col gap-5 items-center" onSubmit={handleSubmit(handleLogin)}>
          <h1 className="md:text-2xl mt-2 ">Login Your Account</h1>
          <hr className="w-32 border-2 -mt-4 rounded-full" style={{ color: colors }} />
          <div className="w-[90%] sm:w-[80%]">
            <Input name="name" control={control} placeholder="Enter Your Name" type="Name" className="bg-gray-100 border dark:bg-dark dark:border-lightBlack" />
          </div>
          <div className="w-[90%] sm:w-[80%]">
            <Input name="email" control={control} placeholder="Enter Your Email" type="email" className="bg-gray-100 border dark:bg-dark dark:border-lightBlack" />
          </div>
          <div className="w-[90%] sm:w-[80%]">
            <Input name="password" control={control} placeholder="Enter Your Password" type="password" className="bg-gray-100 border dark:bg-dark dark:border-lightBlack" />
          </div>
          <button className="px-10 shadow-md rounded-md text-white py-2" style={{ backgroundColor: colors }} type="submit">Submit</button>
          <div>
            Have any Account ? <Link className="underline" style={{ color: colors }} to='/'>Login</Link>
          </div>
        </form>
        <div className=" absolute right-1.5 top-1.5 flex items-center rounded-full justify-between shadow-inner bg-gray-200 dark:bg-dark gap-2 transition-all ease-in-out duration-300 ">
          <button style={{
            color: dark === 'light' ? colors : null
          }} onClick={() => dispatch(setDark('light'))} className={` p-1 rounded-full m-0.5 transition-all ease-in-out duration-300 dark:text-yellow-500 ${dark === 'light' ? 'bg-white shadow-md' : ''} `}><IoMdSunny size={20} /></button>

          <button onClick={() => dispatch(setDark('dark'))} style={{
            color: dark === 'dark' ? colors : null
          }} className={`${dark === 'dark' ? 'bg-lightBlack1 shadow-md' : ''}  p-1 rounded-full m-0.5 transition-all ease-in-out duration-300`} ><FaMoon size={20} /></button>
        </div>
      </div>
    </div>
  )
}

export default Signup