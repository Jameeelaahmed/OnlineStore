import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar/Sidebar"
export default function RoutesLayout() {
    return (
        <div className='admin_container'>
            <Sidebar></Sidebar>
            <Outlet />
            {/* <AddProduct /> */}
            {/* <Products></Products> */}
        </div>
    )
}