import React from "react";
import ProjectHeader from "../../components/projects/ProjectHeader";
import ProjectTable from "../../components/projects/ProjectTable";

function ProjectPage() {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <ProjectHeader />
      </div>
      <div>
        <ProjectTable />
      </div>
    </div>
  );
}

export default ProjectPage;
