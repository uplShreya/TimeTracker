import { Table } from "@mui/material";
import React from "react";
import TextFieldInput from "../../common/formFields/TextFieldInput";
import Dropdownheader from "../../common/uiComponents/Dropdownheader";
// import TimeTrackerDropDown from '../../common/uiComponents/timetrackerdropdown/TimeTrackerDropDown'
import style from "../team/Team.module.css";
function createData(
    name: string,
    email: string,
    role: string,
    group: string,
    
  ) {
    return { name, email, role, group };
  }
  
  const rows = [
    createData(
      "Abhijit Roy",
      "abhijit@underscoretec.com",
      "Owner",
      "Management",
      
    ),
    
  ];
function TeamMembersTable() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "30em",
      }}
    >
      <div className={style.dropdownandtextfield}>
        <div>
          <Dropdownheader
            defaultvalue="Select"
            // value1="Active"
            value2="Archived"
            value3="All"
          />
        </div>
        <div >
        <input type="text" placeholder="Find Project or Client" />
        </div>
      </div>

      <div>
        <div className={style.memberheaderpart}>
          <p>Members</p>
        </div>
      </div>
      <div>
      <Table
        style={{
          width: "100%",
          backgroundColor: "white",
          border: "1px solid #C6D2D9",
        }}
      >
        <thead style={{ border: "1px solid #C6D2D9", height: "3em" }}>
          <tr>
            <th style={{ width: "25%" }}>
              <div
                style={{
                  fontSize: "13px",
                  paddingLeft: "1.6em",
                  color: "#999",
                  height: "2em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                NAME
              </div>
            </th>
            <th style={{ width: "25%" }}>
              <div
                style={{
                  fontSize: "13px",
                  color: "#999",
                  height: "2em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                EMAIL
              </div>
            </th>
            <th style={{ width: "25%" }}>
              <div
                style={{
                  fontSize: "13px",
                  color: "#999",
                  height: "2em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ROLE
              </div>
            </th>
            <th style={{ width: "25%" }}>
              <div
                style={{
                  fontSize: "13px",
                  color: "#999",
                  height: "2em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
               GROUP
              </div>
            </th>
            
          </tr>
        </thead>

        {rows.map((row) => (
          <tr style={{ border: "1px solid #C6D2D9", height: "4.5em" }}>
            <td>
              <div style={{ paddingLeft: "1.5em" }}>
                {row.name}
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "39%",
                }}
              >
                <div
                  style={{
                    borderLeft: "1px dotted #C6D2D9",
                    marginTop: "5px",
                    height: "3em",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft:"10px"
                  }}
                >
                  {row.email}
                </div>
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "30%",
                }}
              >
                <div
                  style={{
                    borderLeft: "1px dotted #C6D2D9",
                    marginTop: "5px",
                    height: "3em",
                  }}
                ></div>
                <div className={style.role} >
                  {row.role}
                </div>
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "16%",
                }}
              >
                <div
                  style={{
                    borderLeft: "1px dotted #C6D2D9",
                    marginTop: "5px",
                    height: "3em",
                  }}
                ></div>
                <div className={style.group} >
                  {row.group}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </Table>
      </div>
    </div>
  );
}

export default TeamMembersTable;
