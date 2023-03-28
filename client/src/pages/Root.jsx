import { Outlet } from "react-router-dom"
import Header from "../components/Header"

function Root() {
  return (
    <>
    <Header/>
    <div>Root</div> 
    <Outlet/>
    </>
  )
}

export default Root