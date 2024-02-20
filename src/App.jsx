import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminPannel from "./pages/AdminPannel"
import Profile from './pages/Profile';
import authServices from "./AppwriteConfig/Auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceLogin, sliceLogout } from "./redux/userSlice";
import { Loading, Login, Signup } from './components/Index';



function App() {

  const dispatch = useDispatch()
  const { status } = useSelector(state => state.user)
  const { loading } = useSelector(state => state.user)
  useEffect(() => {
    authServices.getCurrentUser().then((data) => {
      // console.log(data);
      if (data) {
        dispatch(sliceLogin({ ...data }))

      } else {
        dispatch(sliceLogout())

      }
    })
  }, [dispatch])
  return loading ? <Loading /> : (
    <>
      <BrowserRouter>
        {
          status ?
            <Routes>
              <Route path="/" element={<AdminPannel />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
            :
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>

        }
      </BrowserRouter>
    </>
  )
}

export default App
