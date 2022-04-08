import { Table } from '@mui/material';
import Image from 'next/image';
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
    createData(
      "Device Team",
      "Amartya Chakraborty, Joyita Seal, Rahul Chakraborty, Soumen Samanta, Subham Das, Suman Kamilya",      
    ),
    createData(
      "Frontend",
      "Ayan Sinha, Basanti Akhuli, Niladri Barui, Nupur Saha, Rajdwip Dey, Shreya Saha, Vikash Tiwary",      
    ),
    createData(
      "Management",
      "Abhijit Roy, Ankita Kumari, Biswarup Siddhanta, Sourav, Sushmita",      
    ),
    createData(
      "Testing",
      "Samapti Akhuli",      
    ),
    createData(
      "UI/UX",
      "Alolika , Amit Roy",      
    ),
    
  ];
function TeamGroupTable() {
  return (
    <div
    style={{
        backgroundColor: "white",
        height: "32.5em",
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
            <th style={{ width: "20em" }}>
              <div
                style={{
                  fontSize: "13px",
                  paddingLeft: "1.6em",
                  fontWeight:"500",
                  color: "#999",
                  height: "2em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                NAME
                <div>
                  <Image src="/image/sort.png" alt=""  height={12} width={12}
                  // onClick={sortable ? () => handleSortingChange(accessor) : null}
                  />
                </div>
              </div>
            </th>
            <th style={{ width: "40em" }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight:"500",
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

        {rows.map((row: any) => (
          <tr key={row} style={{ border: "1px solid #C6D2D9", height: "4.5em" }}>
            <td>
              <div style={{ paddingLeft: "1.5em",
            fontSize:"14px",
            color:"#666"}}>
                {row.name}
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems:"center"
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