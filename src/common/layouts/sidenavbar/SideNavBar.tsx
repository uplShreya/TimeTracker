import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { DeleteOutlined } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Image from "next/image";
function SideNavBar() {
  return (
    <Box>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Image
                  src="/image/timetrackericon.svg"
                  height={22}
                  width={28}
                />
              </ListItemIcon>
              <p style={{ fontSize: "16px", fontWeight: "400" }}>TIMETRACKER</p>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            > */}
            <ListItemButton>
              <ListItemIcon>
                <Image src="/image/calendar.svg" height={21} width={27} />
              </ListItemIcon>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                CALENDAR
              </p>
            </ListItemButton>
            {/* <div style={{ paddingLeft: "3em", color: "gray" }}>Analyze</div>
            </div> */}
          </ListItem>
        </List>
      </nav>
      <Divider />
      {/* <div>Analyze</div> */}
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Image src="/image/dashboard.svg" height={21} width={27} />
              </ListItemIcon>
              <p style={{ fontSize: "16px", fontWeight: "400" }}>DASHBOARD</p>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Image src="/image/reports.svg" height={21} width={27} />
              </ListItemIcon>
              <p style={{ fontSize: "16px", fontWeight: "400" }}>REPORTS</p>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="third mailbox folders">
        {/* <div>Manage</div> */}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Image src="/image/projects.svg" height={21} width={27} />
            </ListItemIcon>
            <p style={{ fontSize: "16px", fontWeight: "400" }}>PROJECTS</p>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Image src="/image/teams.svg" height={21} width={27} />
            </ListItemIcon>
            <p style={{ fontSize: "16px", fontWeight: "400" }}>TEAM</p>
          </ListItemButton>
        </ListItem>
      </nav>
    </Box>
  );
}
export default SideNavBar;
