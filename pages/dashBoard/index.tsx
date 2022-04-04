import React from 'react'
import SideNavBar from '../../src/common/layouts/sidenavbar/SideNavBar'
import TwoHalfLayout from '../../src/common/layouts/TwoHalfLayout'
import DashBoard from '../../src/container/dashboard/'

const Dashboard = () => {
  return (
    <div><TwoHalfLayout 
    sideView={<SideNavBar />}
    renderView={<DashBoard />} 
    /></div>
  )
}

export default Dashboard