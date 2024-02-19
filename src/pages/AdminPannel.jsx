import { Outlet } from "react-router-dom"
import Heading from "../components/Heading"
import { Sidebar, Aside } from "../components/Index"

const AdminPannel = () => {
	return (
		<div >
			<div className="shadow z-10">
				<Heading />
			</div>
			<div className="flex min-w-full relative dark:bg-dark dark:text-gray-200">
				<div className="">
					<Sidebar />
				</div>
				<div className="w-full">
					<Aside />
				</div>
			</div>
			<Outlet/>
		</div>
	)
}

export default AdminPannel