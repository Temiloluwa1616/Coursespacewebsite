import { Outlet } from "react-router-dom"
import Rnavbar from "./Rnavbar"

function Layout(){
    return(
        <>
        <Rnavbar/>
        <Outlet/>
        </>
    )
}

export default Layout