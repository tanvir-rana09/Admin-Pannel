import { useDispatch, useSelector } from "react-redux"
import { setCustomize } from "../redux/customize"
import { MdEditRoad } from "react-icons/md"
import { RxCross1 } from "react-icons/rx"
import strageServices from "../AppwriteConfig/Data"
import { useEffect, useState } from "react"
import authServices from "../AppwriteConfig/Auth"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { HiMiniBars3BottomLeft } from "react-icons/hi2"

const ProfileSidebar = () => {
	const dispatch = useDispatch()
	const [sidebar, setSidebar] = useState(false)
	const { userData } = useSelector(state => state.user)
	const primary = useSelector(state => state.color.colors)
	const { customize } = useSelector(state => state.customize)
	const [file, setFile] = useState()
	useEffect(() => {
		authServices.getPref().then((pref) => {
			setFile(pref)
		})

	}, [setFile])
	return (
		<div>
			<button
				onClick={() => setSidebar(!sidebar)}
				className="fixed sm:hidden block bg-white dark:bg-lightBlack1 px-3 py-2 rounded-r-full shadow-md text-2xl top-16 z-10">
				<HiMiniBars3BottomLeft />
			</button>
			<div className={` dark:bg-lightBlack1 h-full dark:shadow-md w-[18rem] bg-white z-[40] sm:block shadow duration-500 ${sidebar ? 'absolute sm:static inset-0 bg-white h-screen' : 'absolute sm:static -left-80 h-screen'}`}>
				<button onClick={() => setSidebar(!sidebar)} className="hover:bg-gray-700/10 p-1.5 float-right rounded-full cursor-pointer sm:hidden block"><RxCross1 /></button>
				<div className=" dark:bg-lightBlack1 dark:text-white">
					<Link className="flex items-center text-xl py-5" to='/'><IoIosArrowBack size={20} />Dashboard</Link>
					<div className="flex flex-col items-center py-5 px-1">
						<div style={{ border: `3px solid ${primary}` }} className="w-28 h-28 rounded-full">
							<img className='w-full h-full rounded-full object-cover' src={strageServices.getFile(file?.fileId || '65d2e17ce0a8da14c246')} alt='profile' />
						</div>
						<p className="text-2xl py-2 font-semibold">{userData.name}</p>
						<p className="">{userData.email}</p>
						<p className="py-2">{userData.$id}</p>
						<button
							onClick={() => dispatch(setCustomize(!customize))}
							style={{
								backgroundColor: primary
							}} className={` justify-center items-center mt-2 mx-auto rounded-md px-6 py-1.5 flex gap-2 w-full text-gray-100`} ><MdEditRoad size={25} />Customize</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileSidebar


