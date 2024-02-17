import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminPannel from "./pages/AdminPannel"
import Profile from './pages/Profile';



function App() {

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
