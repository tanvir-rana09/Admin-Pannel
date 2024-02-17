import { IoHome } from "react-icons/io5"
import { AiOutlineDollar } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Aside = () => {
  const color = useSelector(state=>state.color.colors)
const cards = [
  {
    name:'value',
    number:'$30,000',
    percent:4.4,
    icon:<AiOutlineDollar/>
  },
  {
    name:'users',
    number:'10,500',
    percent:5.1,
    icon:<FaUserFriends/>
  },
  {
    name:'orders',
    number:'66,000',
    percent:2.4,
    icon:<FaArrowTrendUp/>
  },
  {
    name:'tickets',
    number:'90,000',
    percent:9.9,
    icon:<IoTicketOutline/>
  },
]  

  return (
    <div className="w-full bg-slate-100 h-screen dark:bg-dark">
      <div className="flex justify-between px-2 py-5 border-b border-gray-300">
        <p className="md:text-2xl text-xl font-semibold">Dashboard</p>
        <div>
          <div className="flex items-center w-full gap-1 border py-1.5 px-2.5">
            <span style={{color:color}}><IoHome /></span>
            <p>Dashboard</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5 px-5  border-gray-300">
        {
          cards.map((card)=>(
            <div key={card.number}>
              <Card name={card.name} number={card.number} icon={card.icon} percent={card.percent}/>
            </div>
          ))
        }
      </div>
      <div className="flex justify-between px-4 py-3 bg-white dark:bg-lightBlack1">
        <p>Admin Pannel &copy; 2024 </p>
        <p>Made by <Link className="font-semibold " style={{color:color}}>MD Tanvir Rana</Link></p>
      </div>
    </div>
  )
}

export default Aside