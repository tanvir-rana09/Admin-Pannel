import { FaMoon, FaRegBell, FaBell } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { IoSettingsSharp, IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setDark } from "../redux/darkSlice";
import { MdAdminPanelSettings } from "react-icons/md";
import { Notification, Settings } from "./Index";
import { RxCross1 } from "react-icons/rx";
import { setCustomize } from "../redux/customize";
import { Link } from "react-router-dom";

const Heading = () => {
	const primary = useSelector(state => state.color.colors)
	const [notification, setNotification] = useState(false)
	const dark = useSelector((state) => state.dark.dark)
	const dispatch = useDispatch()
	const { customize } = useSelector(state => state.customize)

	useEffect(() => {
		document.querySelector('html').classList.remove("light", "dark")
		document.querySelector('html').classList.add(dark)
	}, [dark])

	return (
		<div className="flex w-full justify-between items-center shadow-lg dark:bg-lightBlack1 dark:text-white md:px-8 px-1 relative">
			<div>
				<h1 className="flex md:text-xl font-semibold font-extendfont7  border-b-lightBlack/20 "> <span><MdAdminPanelSettings size={25} /> </span><p>Admin Pannel</p></h1>
			</div>
			<div className=" flex justify-end items-center py-2 gap-2">

				<div className=" flex items-center rounded-full justify-between shadow-inner bg-gray-200 dark:bg-dark gap-2 transition-all ease-in-out duration-300 ">
					<button style={{
						color: dark === 'light' ? primary : null
					}} onClick={() => dispatch(setDark('light'))} className={` p-1 rounded-full m-0.5 transition-all ease-in-out duration-300 dark:text-yellow-500 ${dark === 'light' ? 'bg-white shadow-md' : ''} `}><IoMdSunny size={20} /></button>

					<button onClick={() => dispatch(setDark('dark'))} style={{
						color: dark === 'dark' ? primary : null
					}} className={`${dark === 'dark' ? 'bg-lightBlack1 shadow-md' : ''}  p-1 rounded-full m-0.5 transition-all ease-in-out duration-300`} ><FaMoon size={20} /></button>
				</div>

				<button onClick={() => setNotification(!notification)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 dark:hover:bg-dark" style={{
					color: primary
				}}>
					{
						notification ? <FaBell size={20} /> : <FaRegBell size={20} />
					}
				</button>
				<button
					onClick={() => dispatch(setCustomize(!customize))}
					className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:hover:bg-dark" style={{
						color: primary
					}}>
					{
						customize ? <IoSettingsSharp size={20} /> : <IoSettingsOutline size={20} />
					}
				</button>
				<div className="cursor-pointer relative first:hover:last:flex setDropdown">
					<div>
						<img className="w-10 rounded-full" src="https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg" alt="profile" />
					</div>
					<div className="absolute top-10 z-50 md:-right-8 right-0 flex-col bg-white shadow-lg rounded-md text-black overflow-hidden dropdown">

						<button style={{ color: primary }} className="px-7 py-2 hover:bg-gray-100 duration-200 w-full"><Link to='/profile'>Profile</Link></button>
						<button style={{ color: primary }} className="px-7 py-2 hover:bg-gray-100 duration-200">Logout</button>
					</div>
				</div>
			</div>
			<div className={` md:fixed absolute duration-1000 w-full bg-gray-900/20 h-full z-[99] ${notification ? 'left-0 top-0 opacity-100' : ' -left-full top-0 h-screen opacity-0'} `}>
				<div className="md:w-[30rem] w-full bg-white h-screen relative">
					<Notification />
					<button onClick={() => setNotification(!notification)} className="absolute right-0 md:right-0 bg-gray-100 rounded-full p-2 top-4 mr-5 dark:bg-dark"><RxCross1 size={20} /></button>
				</div>
			</div>
			<div className={` md:fixed absolute flex justify-end duration-1000 w-full bg-gray-900/20 h-full z-[99] ${customize ? 'right-0 top-0 opacity-100' : ' -right-full top-0 h-screen opacity-0'} `}>
				<div className="md:w-[30rem] w-full bg-white h-screen relative ">
					< Settings />
					<button onClick={() => dispatch(setCustomize(!customize))} className="absolute left-0 md:left-0 bg-gray-100 rounded-full p-2 top-4 ml-5 dark:bg-dark"><RxCross1 size={20} /></button>
				</div>
			</div>
		</div>
	)
}

export default Heading