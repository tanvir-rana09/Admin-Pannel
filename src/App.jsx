import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminPannel from "./pages/AdminPannel"
import Profile from './pages/Profile';
import authServices from "./AppwriteConfig/Auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sliceLogin, sliceLogout } from "./redux/userSlice";



function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    authServices.getCurrentUser().then((data) => {
      if (data) {
        dispatch(sliceLogin({ ...data }))
      } else {
        dispatch(sliceLogout())
      }
    })
  }, [dispatch])
  console.log()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPannel />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
