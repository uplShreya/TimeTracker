import React from 'react'
import SideNavBar from '../../src/common/layouts/sidenavbar/SideNavBar'
import TwoHalfLayout from '../../src/common/layouts/TwoHalfLayout'
import Team from '../../src/container/team/Team';

function index() {
  return (
    <div
    style={{padding: "10px",
      height: "38em",
      backgroundColor:" #f5fafa"
  }}>
        <TwoHalfLayout 
      sideView={<SideNavBar />}
      renderView={<Team />} 
      />
    </div>
  )
}

export default index