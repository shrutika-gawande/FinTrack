import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from '../components/common/Sidebar'
import "../styles/mainLayout.css"

function MainLayout() {
    return (
        <div className='container'>

            <div>
                <Sidebar />
            </div>

            <main className='outlet'>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout