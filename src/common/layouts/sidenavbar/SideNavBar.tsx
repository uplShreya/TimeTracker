import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { sideNav } from "../../data";
import { useRouter } from "next/router";
import style from "../../../common/layouts/sidenavbar/SideNavBar.module.css";
function SideNavBar() {
  const router = useRouter();
  const [active, setActive] = React.useState(0);
  const redirection = (name: any) => {
    switch (name) {
      case "TIME TRACKER":
        router.push("/timetracker");
        break;
      case "DASHBOARD":
        router.push("/dashBoard");
        break;
      case "PROJECTS":
        router.push("/projects");
        break;
        case "TEAM":
        router.push("/team");
        break;
      default:
        break;
    }
  };
  React.useEffect(() => {
    switch (router.pathname) {
      case "/timetracker":
        setActive(0);
        break;

      case "/dashBoard":
        setActive(2);
        break;
      case "/projects":
        setActive(4);
        break;
        case "/team":
        setActive(5);
        break;
      default:
        break;
    }
  }, [router.pathname]);

  return (
    <Box>
      {sideNav &&
        sideNav.length > 0 &&
        sideNav.map((item, index) => {
          return (
            <nav>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    className={`${active === index && style.selection}`}
                    onClick={() => {
                      redirection(item.name);
                    }}
                  >
                    <ListItemIcon>
                      <Image src={item.icon} height={22} width={28} />
                    </ListItemIcon>
                    <p style={{ fontSize: "16px", fontWeight: "400" }}>
                      {item.name}
                    </p>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          );
        })}
    </Box>

    // <Box>
    //   <nav aria-label="main mailbox folders">
    //     <List>
    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <Image
    //               src="/image/timetrackericon.svg"
    //               height={22}
    //               width={28}
    //             />
    //           </ListItemIcon>
    //           <p style={{ fontSize: "16px", fontWeight: "400" }}>TIMETRACKER</p>
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItem disablePadding>
    //         {/* <div
    //           style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             alignItems: "center",
    //           }}
    //         > */}
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <Image src="/image/calendar.svg" height={21} width={27} />
    //           </ListItemIcon>
    //           <p
    //             style={{
    //               fontSize: "16px",
    //               fontWeight: "400",
    //             }}
    //           >
    //             CALENDAR
    //           </p>
    //         </ListItemButton>
    //         {/* <div style={{ paddingLeft: "3em", color: "gray" }}>Analyze</div>
    //         </div> */}
    //       </ListItem>
    //     </List>
    //   </nav>
    //   <Divider />
    //   {/* <div>Analyze</div> */}
    //   <nav aria-label="secondary mailbox folders">
    //     <List>
    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             <Image src="/image/dashboard.svg" height={21} width={27} />
    //           </ListItemIcon>
    //           <p style={{ fontSize: "16px", fontWeight: "400" }}>DASHBOARD</p>
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItem disablePadding>
    //         <ListItemButton component="a" href="#simple-list">
    //           <ListItemIcon>
    //             <Image src="/image/reports.svg" height={21} width={27} />
    //           </ListItemIcon>
    //           <p style={{ fontSize: "16px", fontWeight: "400" }}>REPORTS</p>
    //         </ListItemButton>
    //       </ListItem>
    //     </List>
    //   </nav>
    //   <Divider />
    //   <nav aria-label="third mailbox folders">
    //     {/* <div>Manage</div> */}

    //     <ListItem disablePadding>
    //       <ListItemButton>
    //         <ListItemIcon>
    //           <Image src="/image/projects.svg" height={21} width={27} />
    //         </ListItemIcon>
    //         <p style={{ fontSize: "16px", fontWeight: "400" }}>PROJECTS</p>
    //       </ListItemButton>
    //     </ListItem>
    //     <ListItem disablePadding>
    //       <ListItemButton component="a" href="#simple-list">
    //         <ListItemIcon>
    //           <Image src="/image/teams.svg" height={21} width={27} />
    //         </ListItemIcon>
    //         <p style={{ fontSize: "16px", fontWeight: "400" }}>TEAM</p>
    //       </ListItemButton>
    //     </ListItem>
    //   </nav>
    // </Box>
  );
}
export default SideNavBar;
