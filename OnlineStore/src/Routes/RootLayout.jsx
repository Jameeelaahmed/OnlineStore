import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar/Sidebar"
import Header from "../Components/Header/Header"
import classes from './RootLayout.module.css'
import * as FaIcon from 'react-icons/fa6'
import { useState } from "react"
export default function RootLayout() {
    const [isOpen, setIsOpen] = useState(false);
    function handleOpenSidebar() {
        setIsOpen(true)
    }
    function handleCloseSidebar() {
        setIsOpen(false)
    }

    return (
        // <div className='admin_container'>
        <>
            <Sidebar opened={isOpen} closed={handleCloseSidebar}></Sidebar>
            <div className={classes.main_container}>
                <div className={classes.head_container}>
                    {!isOpen &&
                        <p className={classes.arrow_container} onClick={handleOpenSidebar}>
                            <FaIcon.FaList className={classes.icon} />
                        </p>}
                    <Header />
                </div>
                <Outlet />
            </div>
        </>
        // </div>
    )
}