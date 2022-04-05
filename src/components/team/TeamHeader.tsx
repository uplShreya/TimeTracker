import React from "react";
import style from "../team/Team.module.css"
import TeamMembersTable from "../team/TeamMembersTable"
import TeamGroupTable from "./TeamGroupTable";

function TeamHeader() {
  return (
    <div>
      <ul className={style.tabwrap}>
        <li>
          <input type="radio" id="tab-1" name="tab" checked />
          <label htmlFor="tab-1">Members</label>
          <div className={style.tabcontent}>
            <TeamMembersTable/>
            
          </div>
        </li>
        <li>
          <input type="radio" id="tab-2" name="tab" />
          <label htmlFor="tab-2">Groups</label>
          <div className={style.tabcontent}>
            <TeamGroupTable/>
            
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TeamHeader;
