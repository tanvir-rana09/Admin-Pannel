import { useSelector } from "react-redux"

const Card = ({name,icon,number,percent}) => {
  const color = useSelector(state=>state.color.colors)
  return (
	<div className="flex justify-between bg-white rounded-md items-center p-2 py-4 shadow-md dark:bg-lightBlack1">
    <div>
    <p className="uppercase text-sm font-semibold tracking-wider">{name}</p>
      <div className="flex items-center">
      <p className="text-xl font-extendfont4">{number}</p>
      <p className=" font-semibold " style={{color:color}}>+{percent}%</p>
      </div>
    </div>
    <div className="text-4xl" style={{color:color}}>{icon}</div>
  </div>
  )
}

export default Card