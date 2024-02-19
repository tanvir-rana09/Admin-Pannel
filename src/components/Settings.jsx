import { useDispatch, useSelector } from "react-redux"
import { setColor } from "../redux/colorSlice"
import { setDark } from "../redux/darkSlice"
import { MdEditRoad } from "react-icons/md"
import { useEffect } from "react"

const Settings = () => {
  const {colors}=useSelector(state=>state.color)
  const dispatch = useDispatch()
	const dark = useSelector((state) => state.dark.dark)
  useEffect(() => {
		document.querySelector('html').classList.remove("light", "dark")
		document.querySelector('html').classList.add(dark)
	}, [dark])

  return (
    <div className="h-screen w-full dark:bg-dark dark:text-gray-300 z-0">
      <h2 className="text-center text-2xl py-5 border-b border-gray-900 flex justify-center items-center flex-col bg-white dark:bg-dark"> <span style={{color:colors}}><MdEditRoad size={30} /></span> Settings</h2>
      <div className="bg-gray-100 h-full dark:bg-lightBlack1">
      <div className="flex flex-col justify-start w-full items-center  ">
        <h3 className="font-semibold py-3">Choose Theme</h3>
       <div className="flex gap-3">
       <button onClick={()=>dispatch(setDark('light'))} className="px-5 py-2 bg-white dark:text-black shadow-md rounded-sm">Light</button>
        <button onClick={()=>dispatch(setDark('dark'))} className="px-5 py-2 bg-dark text-white dark:bg-dark shadow-md rounded-sm">Dark</button>
       </div>
      </div>
      <h3 style={{color:colors}} className="text-center mt-5 font-semibold ">Choose Color</h3>
      <div className="flex gap-2 justify-center mt-5">
        <button onClick={()=>dispatch(setColor('#1BCFB4'))} className="bg-[#1BCFB4] h-8 w-8 rounded-full block shadow-md"></button>
        <button onClick={()=>dispatch(setColor('#4BCBEB'))} className="bg-[#4BCBEB] h-8 w-8 rounded-full block shadow-md"></button>
        <button onClick={()=>dispatch(setColor('#FE9496'))} className="bg-[#FE9496] h-8 w-8 rounded-full block shadow-md"></button>
        <button onClick={()=>dispatch(setColor('#9E58FF'))} className="bg-[#9E58FF] h-8 w-8 rounded-full block shadow-md"></button>
        <button onClick={()=>dispatch(setColor('#4B49AC'))} className="bg-[#4B49AC] h-8 w-8 rounded-full block shadow-md"></button>
        <button onClick={()=>dispatch(setColor('#AF1763'))} className="bg-[#AF1763] h-8 w-8 rounded-full block shadow-md"></button>
        <button onClick={()=>dispatch(setColor('#198754'))} className="bg-[#198754] h-8 w-8 rounded-full block shadow-md"></button>
        <button onClick={()=>dispatch(setColor(''))} className="bg-[]"></button>
      </div>
      </div>
    </div>
  )
}

export default Settings