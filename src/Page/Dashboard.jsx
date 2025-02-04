import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import { DashboardTables } from '../Components/Tables/DashboardTables'
import SideBar from '../Components/SideBar/SideBar'



export default function Dashboard() {
  return <>
      <div className="grid grid-rows-[auto_1fr] h-screen">    
      <Navbar />
      <div className="grid grid-cols-[250px_auto]">
        <div >
          <SideBar />
        </div>
        <div >
          <DashboardTables />
        </div>
      </div>
    </div>

  </>
}
