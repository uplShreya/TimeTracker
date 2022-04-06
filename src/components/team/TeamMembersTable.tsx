import { Table } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import TextFieldInput from "../../common/formFields/TextFieldInput";
import CommonDropdown from "../../common/UiComponents/commonDropdown/commonDropdown";
import Dropdownheader from "../../common/UiComponents/Dropdownheader";
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
    createData(
      "Alolika",
      "alolika.sen@utplco.com",
      "",
      "UI/UX",
      
    ),
  ];
function TeamMembersTable() {
  // const[sortasc,setsortasc]=useState([]);
  // function sortingAscImage () {
  //   rows.sort ((a:any , b:any) => Number(a.name) - Number(b.name));
  //   setsortasc(rows)
//   const rows1 = [...rows].sort((a, b) => (a.name < b.name ? -1 : 1));

//   const [sortField, setSortField] = useState("");
//  const [order, setOrder] = useState("asc");

//  const handleSortingChange = (accessor : any) => {
//   const sortOrder =
//   accessor === sortField && order === "asc" ? "desc" : "asc";
//  setSortField(accessor);
//  setOrder(sortOrder);
//  handleSorting(accessor, sortOrder);

 

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "30em",
      }}
    >
      <div className={style.dropdownandtextfield}>
        <div>
          <CommonDropdown
          dropdown={true}
          value='Show all'
          firstvalue='Project'
          secoundNmae='Billability'
          secoundvalue='Billability'
          dropdownclass={style.dropdownstyle}/>
        </div>
        <div style={{paddingLeft:"10px"}}>
        <input type="search" placeholder="Search by name or email" 
        style={{height:"3em",
      width:"20em",
    border:"1px solid darkgrey",
    padding:"10px",
  borderRadius:"2px"}}
        />
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
            <th style={{ width: "18%" }}>
              <div style={{display:"flex",
            width:"36%",
            justifyContent:"space-between",
            alignItems:"center"}}>
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
                <div>
                  <Image src="/image/sort.png" alt=""  height={12} width={12}
                  // onClick={sortable ? () => handleSortingChange(accessor) : null}
                  />
                </div>
              </div>
            </th>
            <th style={{ width: "30%" }}>
              <div style={{display:"flex",
            width:"16%",
            justifyContent:"space-between",
            alignItems:"center"}}>
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
              <div>
                  <Image src="/image/sort.png" alt=""  height={12} width={12}
                  // onClick={sortable ? () => handleSortingChange(accessor) : null}
                  />
                </div>
              </div>
            </th>
            <th style={{ width: "20%" }}>
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
              <div style={{display:"flex",
            width:"21%",
            justifyContent:"space-between",
            alignItems:"center"}}>
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
              <div>
                  <Image src="/image/sort.png" alt=""  height={12} width={12}
                  // onClick={sortable ? () => handleSortingChange(accessor) : null}
                  />
                </div>
                </div>
            </th>
            
          </tr>
        </thead>

        {rows.map((row) => (
          <tr style={{ border: "1px solid #C6D2D9", height: "3.5em" }}>
            <td>
              <div style={{ paddingLeft: "1.5em",fontSize:"14px" }}>
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
                    paddingLeft:"10px",
                    fontSize:"14px",
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
                  {row?.role}
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
