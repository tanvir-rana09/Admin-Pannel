import { FaRegBell } from "react-icons/fa"
import { useSelector } from "react-redux"


const Notification = ({notification,setNotification}) => {
	const primary = useSelector(state => state.color.colors)
	const notifications = [
		{
			name: 'New project KWD Dashboard Created',
			p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure illo magni porro ab nobis vero suscipit unde quae expedita.',
			src: 'Tanvir Rana',
			time: '5 mins age'
		},
		{
			name: 'Message',
			p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure illo magni porro ab nobis vero suscipit unde quae expedita.',
			src: 'Tanvir Rana',
			time: '5 mins age'
		},
		{
			name: 'Comment',
			p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure illo magni porro ab nobis vero suscipit unde quae expedita.',
			src: 'Tanvir Rana',
			time: '5 mins age'
		},
		{
			name: 'Message',
			p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure illo magni porro ab nobis vero suscipit unde quae expedita.',
			src: 'Tanvir Rana',
			time: '5 mins age'
		},
		{
			name: 'New project KWD Dashboard Created',
			p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure illo magni porro ab nobis vero suscipit unde quae expedita.',
			src: 'Tanvir Rana',
			time: '5 mins age'
		},
		{
			name: 'New project KWD Dashboard Created',
			p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure illo magni porro ab nobis vero suscipit unde quae expedita.',
			src: 'Tanvir Rana',
			time: '5 mins age'
		}
	]
	return (
		<div className="h-screen dark:bg-lightBlack1 dark:text-gray-300">
			<h1 className="text-2xl text-center py-4 border-b mb-5 font-semibold ">Notification</h1>
			<div className="flex flex-col gap-5">
				{
					notifications.map((data,i) => (
						<div key={i} className="flex dark:bg-lightBlack1 items-center border-b gap-3 px-5">
							<div style={{color:primary}} className="rounded-full bg-gray-200 p-2 dark:bg-dark hover:bg-gray-400 md:text-2xl">
								<FaRegBell />
							</div>
							<div className="">
								<h2 style={{color:primary}} className=" capitalize font-semibold">{data.name}</h2>
								<p className="text-sm">{data.p}</p>
								<div className="flex gap-5 items-center">
									<p style={{color:primary}} className="">{data.src}</p>
									<p className="text-gray-400 text-sm">{data.time}</p>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Notification