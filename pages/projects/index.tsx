import React from "react";
import Header from "../../src/common/layouts/header/Header";
import SideNavBar from "../../src/common/layouts/sidenavbar/SideNavBar";
import TwoHalfLayout from "../../src/common/layouts/TwoHalfLayout";
import ProjectPage from "../../src/container/projectscontainer/ProjectPage";

function index() {
  return (
    <div>
      {/* <TwoHalfLayout
        sideView={<SideNavBar />}
        headerView={<Header />}
        renderView={<ProjectPage />}
      /> */}
      <ProjectPage />
    </div>
  );
}

export default index;
