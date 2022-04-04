import React from "react";
import ProjectHeader from "../../components/projects/ProjectHeader";
import ProjectTable from "../../components/projects/ProjectTable";

function ProjectPage() {
  return (
    <div>
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
