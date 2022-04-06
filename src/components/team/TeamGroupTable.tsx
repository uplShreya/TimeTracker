import { Table } from '@mui/material';
import React from 'react'
import style from '../team/Team.module.css'


function createData(
    name: string,
    access: string,
    
  ) {
    return { name, access };
  }
  
  const rows = [
    createData(
      "Backend",
      "Basanti Akhuli, Bhaskar Bonu, Sukanta Majhi",      
    ),
    
  ];
function TeamGroupTable() {
  return (
    <div
    style={{
        backgroundColor: "white",
        height: "30em",
      }}>
          <div className={style.memberheaderpart}>
          <p>Groups</p>
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
            <th style={{ width: "30%" }}>
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
            <th style={{ width: "70%" }}>
              <div
                style={{
                  fontSize: "13px",
                  color: "#999",
                  height: "2em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ACCESS
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
                  width: "43%",
                }}
              >
                <div
                  style={{
                    borderLeft: "1px dotted #C6D2D9",
                    marginTop: "5px",
                    height: "3em",
                  }}
                ></div>
                <div className={style.access} >
                  {row.access}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </Table>
      </div>
      </div>
  )
}

export default TeamGroupTable