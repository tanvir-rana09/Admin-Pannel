import { useDispatch, useSelector } from 'react-redux'
import { ProfileAside, ProfileSidebar, Settings } from '../components/Index'
import { RxCross1 } from "react-icons/rx";
import { setCustomize } from '../redux/customize';
const Profile = () => {
  const { customize } = useSelector(state => state.customize)
  const dispatch = useDispatch()
  return (
    <div className='relative flex'>
      <div className=''><ProfileSidebar /></div>
      <div className='w-full'><ProfileAside /></div>
      <div className={`absolute duration-500 w-screen flex justify-end bg-gray-800/30 ${customize ? 'top-0 right-0' : ' -right-[120rem] top-0'} z-50`}>
        <div className='w-[30rem] relative'>
          <Settings />
          <button onClick={() => dispatch(setCustomize(!customize))} className=' absolute left-5 top-8 p-2 hover:bg-gray-200 bg-gray-100 rounded-full duration-300 cursor-pointer dark:bg-lightBlack1 dark:text-white'><RxCross1 size={20} /></button>
        </div>
      </div>
    </div>
  )
}

export default Profile;