import { RiDashboard2Fill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdEditRoad } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { setCustomize } from "../redux/customize";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(false)
  const primary = useSelector(state => state.color.colors)
  const [sidebar, setSidebar] = useState(false)
  const {customize}=useSelector(state=>state.customize)
  const dispatch = useDispatch()
  return (
    <div className="relative">
      <button
        onClick={() => setSidebar(!sidebar)}
        className="fixed sm:hidden block bg-white  dark:bg-lightBlack1 px-3 py-2 rounded-r-full shadow-md text-2xl top-28 ">
        <HiMiniBars3BottomLeft />
      </button>
      <div className={` dark:bg-lightBlack1 h-full dark:shadow-md w-[18rem] bg-white z-50 sm:block shadow duration-500 ${sidebar? 'absolute sm:static inset-0 z-50 bg-white h-screen':'absolute sm:static -left-80 h-screen'}`}>
        <div className="">
          <div style={{
            backgroundColor: primary
          }} className={`flex items-center w-full bg-[${primary}]  justify-between gap-1 px-5 py-2.5 dark:bg-lightBlack1`}> <div className="flex items-center w-full text-gray-100"><span><RiDashboard2Fill size={20} /></span> Dashboards </div> <button onClick={()=>setSidebar(!sidebar)} className="hover:bg-gray-700/10 p-1.5 rounded-full cursor-pointer sm:hidden block"><RxCross1/></button></div>
          <div className="w-[89%] mx-auto mt-2">
            <button
              style={{
                backgroundColor: primary,
              }}
              onClick={() => setDropdown(!dropdown)} className={`flex justify-between w-full items-center  px-5 mt-2 py-2 rounded-md bg-[${primary}] dark:bg-lightBlack1`}>
              <div className="flex items-center w-full gap-1 text-gray-100">
                <span><IoHome /></span>
                <p>Dropdown</p>
              </div>
              <span className={`ease-in-out transition-all duration-300 ${dropdown ? 'rotate-0' : 'rotate-180'}`}><IoIosArrowDown /></span>
            </button>
            <div className={`flex-col min-w-full transition-all duration-500 ${dropdown ? 'hidden' : 'flex'}`}>
              <button style={{color:primary}} className={` mt-2 rounded-md px-6 py-2 font-semibold text-left dark:bg-dark  bg-slate-100`} >Default</button>
              <button style={{color:primary}} className={` mt-2 rounded-md px-6 py-2 font-semibold text-left dark:bg-dark bg-slate-100`} >E-commerce</button>
            </div>
          </div>
          <button 
          onClick={()=>dispatch(setCustomize(!customize))}
          style={{
            backgroundColor: primary
          }} className={`bg-[${primary}] justify-center items-center mt-2 w-[89%] mx-auto rounded-md px-6 py-2 flex gap-2  text-gray-100`} ><MdEditRoad size={25} />Customize</button>
        </div>
      </div>
    </div>
  )
}

export default (Sidebar);