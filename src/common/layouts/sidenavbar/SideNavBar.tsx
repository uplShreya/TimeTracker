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
function SideNavBar() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText primary="TIMETRACKER" />
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
                <CalendarMonthOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="CALENDAR" />
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
                <GridViewOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="DASHBOARD" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <EqualizerOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="REPORTS" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        {/* <div>Manage</div> */}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DescriptionOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="PROJECTS" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <GroupsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="TEAM" />
          </ListItemButton>
        </ListItem>
      </nav>
    </Box>
  );
}
export default SideNavBar;
