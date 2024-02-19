import { ImProfile } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {  useSelector } from "react-redux";
import strageServices from "../AppwriteConfig/Data";
import { CiEdit } from "react-icons/ci";
import { MdFormatListNumbered } from "react-icons/md";
import { useEffect, useState } from "react";
import authServices from "../AppwriteConfig/Auth";
const ProfileAside = () => {
	const [change, setChange] = useState(false)
	const { userData } = useSelector(state => state.user)
	const primary = useSelector(state => state.color.colors)
	const [file, setFile] = useState()
	const changeImage = async (e) => {

		strageServices.createFile(e.target.files[0]).then((data) => {
			authServices.updatePref({
				fileId: data.$id
			})

		})

	}
	useEffect(() => {

		authServices.getPref().then((pref) => {
			setFile(pref)

		})
	}, [setFile])
	return (
		<div className="bg-gray-100  h-screen dark:bg-dark dark:text-white ">
			<div className="border-b border-gray-300">
				<h1 className="flex items-center gap-1 py-3 px-5 text-xl font-semibold">My Profile <ImProfile style={{color:primary}} size={15} /></h1>
			</div>
			<div className="w-full">
				<h2 className="px-5 pt-3 text-xl text-center">Profile Details</h2>
				<div>
					<div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 mt-5 border-b pb-5">
						<label className="flex flex-col px-2 gap-2" htmlFor="name">
							<div className="flex items-center gap-1 justify-between">
								<div className="flex items-center gap-1">
									<button><FaUser style={{color:primary}} size={12} /></button> <span>Full Name</span>
								</div>
								<button className="hover:bg-gray-200 rounded-full p-2 duration-300"><CiEdit style={{color:primary}} size={20} /></button>
							</div>
							<input className=" dark:bg-lightBlack1 px-3 py-2 rounded-md shadow-sm outline-none " type="text" name="name" id="name" defaultValue={userData.name} readOnly={true} />
						</label>
						<label className="flex flex-col px-2 gap-2" htmlFor="name">

							<div className="flex items-center gap-1 justify-between">
								<div className="flex items-center gap-1">
									<button><MdEmail style={{color:primary}} size={15} /></button> <span>Email</span>
								</div>
								<button className="hover:bg-gray-200 rounded-full p-2 duration-300"><CiEdit style={{color:primary}} size={20} /></button>
							</div>
							<input style={{ border: primary }} className="px-3 py-2 rounded-md shadow-sm outline-none focus:border dark:bg-lightBlack1" type="text" name="name" id="name" defaultValue={userData.email} readOnly={true} />
						</label>
						<label className="flex flex-col px-2 gap-2 mt-3" htmlFor="name">
							<div className="flex items-center gap-1 justify-between">
								<div className="flex items-center gap-1">
									<button><MdFormatListNumbered  style={{color:primary}}size={15} /></button> <span>Id</span>
								</div>
							</div>
							<input className="px-3 py-2 dark:bg-lightBlack1 rounded-md shadow-sm outline-none " type="text" name="name" id="name" defaultValue={userData.$id} readOnly={true} />
						</label>
						<label className="flex flex-col px-2 gap-2" htmlFor="name">

							<div className="flex items-center gap-1 justify-between">
								<div className="flex items-center gap-1">
									<button><MdEmail style={{color:primary}} size={15} /></button> <span>Number</span>
								</div>
								<button className="hover:bg-gray-200 rounded-full p-2 duration-300"><CiEdit style={{color:primary}} size={20} /></button>
							</div>
							<input style={{ border: primary }} className="px-3 py-2 rounded-md shadow-sm outline-none dark:bg-lightBlack1 focus:border" type="text" name="name" id="name" defaultValue={'Add Number'} readOnly={true} />
						</label>
					</div>
					<div>

						<div className="relative pl-2">
							<h2 className="text-xl pt-5 pb-1">Change Profile</h2>
							<div className="w-32 h-32 rounded-full">
								<img style={{ border: `3px solid ${primary}` }} className=" rounded-full object-cover h-full w-full" src={strageServices.getFile(file?.fileId || '65d2e17ce0a8da14c246')} alt="profile" />
							</div>
							<div className="absolute top-32 w-10 h-10 flex items-center justify-center">
								<label onClick={() => setChange(!change)} htmlFor="files" className="flex items-center rounded-full p-2 text-white shadow-md
								" style={{ backgroundColor: primary }}><FaEdit size={15} /></label>
								<input
									label="Featured Image :"
									type="file"
									className="mb-4"
									id="files"
									onChange={changeImage}
									style={{ visibility: 'hidden' }}
									accept="image/png, image/jpg, image/jpeg, image/gif"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileAside