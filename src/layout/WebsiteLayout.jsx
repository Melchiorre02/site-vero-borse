import { Outlet } from "react-router-dom"
import Header from "../componenti/Header"
import Footer from "../componenti/Footer"


const WebsiteLayout = () => {
  return (
    <>
     <Header /> 
    <Outlet />
    <Footer />
    </>
  )
}

export default WebsiteLayout