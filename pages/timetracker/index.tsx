import React from 'react'
import SideNavBar from '../../src/common/layouts/sidenavbar/SideNavBar'
import TwoHalfLayout from '../../src/common/layouts/TwoHalfLayout'
import TimeTracker from '../../src/container/timetracker/TimeTracker'

function index() {
  return (
    <div><TwoHalfLayout 
    sideView={<SideNavBar />}
    renderView={<TimeTracker/>} 
    /></div>
  )
}

export default index