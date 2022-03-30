import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { deepPurple } from "@mui/material/colors";
import Dropdownheader from "../../uiComponents/Dropdownheader";

function Header() {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            width: "22em",
            justifyContent: "space-between",
            float: "right",
          }}
        >
          <div>
            <Dropdownheader value1="Project Workspace" />
          </div>
          <div
            style={{
              borderRight: "1px dotted gray",
              marginTop: "5px",
              height: "3em",
            }}
          ></div>
          <div>
            <Image src="/image/help.svg" height={60} width={20} />
          </div>
          <div
            style={{
              borderRight: "1px dotted gray",
              marginTop: "5px",
              height: "3em",
            }}
          ></div>
          <div>
            <Image src="/image/notification.svg" height={60} width={18} />
          </div>
          <div
            style={{
              borderRight: "1px dotted gray",
              marginTop: "5px",
              height: "3em",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: deepPurple[500], width: 38, height: 38 }}>
              SS
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
