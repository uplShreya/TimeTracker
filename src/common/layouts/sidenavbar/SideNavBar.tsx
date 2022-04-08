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
import { Tooltip } from "@mui/material";
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
        case "REPORTS":
          router.push("/reports");
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
        case "/reports":
          setActive(3);
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
                    sx={{ borderLeft: `4px solid ${item.color}` }}
                    className={`${active === index && style.selection}`}
                    onClick={() => {
                      redirection(item.name);
                    }}
                  >
                    <Tooltip title={item.name} arrow placement="right">
                      <ListItemIcon>
                        <Image src={item.icon} height={22} width={28} />
                      </ListItemIcon>
                    </Tooltip>

                    <p style={{ fontSize: "14px", fontWeight: "400" }}>
                      {item.name}
                    </p>
                  </ListItemButton>
                </ListItem>
              </List>
              {item.name == "CALENDER" || item.name == "REPORTS" ? (
                <Divider />
              ) : null}
            </nav>
          );
        })}
    </Box>

  );
}
export default SideNavBar;
