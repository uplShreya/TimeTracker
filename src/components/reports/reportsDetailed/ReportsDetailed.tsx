import React, { useState } from "react";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import { styled } from "@mui/system";

import ReportsSubheader from "../reportsSubheader/ReportsSubheader";
import Table from "@mui/material/Table";
import Image from "next/image";
import styles from "../../reports/reportsDetailed/ReportsDetailed.module.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Button } from "@mui/material";
import { style } from "@mui/system";
import ReportsDetailedTimeAudit from "./ReportsDetailedTimeAudit";
import Dropdownheader from "../../../common/UiComponents/Dropdownheader";

const ReportsDetailed = () => {
  function createData(
    name: string,
    client: string,
    user: string,
    access: string,
    favorites: string,
    color: string,
    icon: any,
    todo: string
  ) {
    return { name, client, user, access, favorites, color, icon, todo };
  }

  const rows = [
    createData(
      "Automation",
      "Abhijit Roy",
      "sourav",
      "_",
      "Public",
      "#a3e8f7",
      StarBorderOutlinedIcon,
      "15 minutes meeting"
    ),
    createData(
      "Break",
      "Abhijit Roy",
      "vikash tiwary",
      "_ ",
      "Public",
      "red",
      StarBorderOutlinedIcon,
      "adding data in dropdown"
    ),
    createData(
      "Learning & Development",
      "Abhijit Roy",
      "samapti akhuli",
      "_",
      "Public",
      "blue",
      StarBorderOutlinedIcon,
      "Air Break"
    ),
    createData(
      "Menzie.net",
      "Marc",
      "basanti akhuli",
      " _",
      "Public",
      "#1c914b",
      StarBorderOutlinedIcon,
      "Album double sharing issue"
    ),
    createData(
      "Misc(internal)",
      "Abhijit Roy",
      "soumen samanta",
      "_",
      "Public",
      "#34cfeb",
      StarBorderOutlinedIcon,
      "Album Double Sharing issue"
    ),
    createData(
      "MySitePower",
      "Steve Dollens",
      "soumen samanta",
      "_",
      "Private",
      "#f72ad4",
      StarBorderOutlinedIcon,
      "album search grid view"
    ),
    createData(
      "PictPlay",
      "Steve Dollens",
      "Niladri barui",
      "_",
      "Private",
      "green",
      StarBorderOutlinedIcon,
      "album search list view"
    ),
  ];

  // switching

  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };

  const blue = {
    500: "#007FFF",
  };

  const grey = {
    400: "#BFC7CF",
    500: "#AAB4BE",
    600: "#6F7E8C",
  };

  const Root = styled("span")(
    ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
  );

  const [open, setOpen] = React.useState(true);
  const active = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ReportsSubheader />

      <div onClick={active} className={styles.reportsdetailedbutton}>
        <Button className={styles.reportdetailedtimebutton}>Time Audit</Button>
        <Image src="/image/chevron-down.svg" height={13} width={12} />
      </div>
      {!open && (
        <div style={{ padding: "2.2em 0 0 0" }}>
          <ReportsDetailedTimeAudit />
        </div>
      )}

      <div>
        <div style={{ padding: "1.5em 0 0 0" }}>
          {/* <div
            style={{
              border: "1px solid #C6D2D9",
              borderRadius: "2px",

              backgroundColor: "rgb(228, 234, 238)",
              height: "3em",
              display: "flex",
              alignItems: "center",
              paddingLeft: "1.7em",
              color: "#999",
              fontSize: "13px",
            }}
          >
            <p>Total:</p>
            <div>
              <p
                style={{ fontSize: "20px", color: "black", paddingLeft: "5px" }}
              >
                678:25:47
              </p>
            </div>
          </div> */}

          <div className={styles.weeklyheaderpart}>
            <div className={styles.leftpart}>
              <div className={styles.totaltext}>
                <p style={{ paddingTop: "15px" }}>Total : </p>
                <p className={styles.textstyle}>886:27:50</p>
              </div>
            </div>
            <div className={styles.rightpart}>
              <div
                style={{
                  borderLeft: "1px dotted #C6D2D9",
                  marginTop: "5px",
                  height: "2.5em",
                }}
              ></div>
              <div>
                <Dropdownheader
                  defaultvalue="Export"
                  // value1="Active"
                  value2="Archived"
                  value3="All"
                />
              </div>
              <div
                style={{
                  borderLeft: "1px dotted #C6D2D9",
                  marginTop: "5px",
                  height: "2.5em",
                }}
              ></div>
              <div className={styles.img}>
                <Image
                  src="/image/print.svg"
                  alt="printicon"
                  height={20}
                  width={20}
                />
              </div>
              <div
                style={{
                  borderLeft: "1px dotted #C6D2D9",
                  marginTop: "5px",
                  height: "2.5em",
                }}
              ></div>
              <div className={styles.img}>
                <Image
                  src="/image/share.svg"
                  alt="printicon"
                  height={20}
                  width={20}
                />
              </div>
              <div
                style={{
                  borderLeft: "1px dotted #C6D2D9",
                  marginTop: "5px",
                  height: "2.5em",
                }}
              ></div>
              <div className={styles.switchbuttontext}>
                <SwitchUnstyled component={Root} {...label} />
                <p>Rounded</p>
              </div>
              <div
                style={{
                  borderLeft: "1px dotted #C6D2D9",
                  marginTop: "5px",
                  height: "2.5em",
                }}
              ></div>
            </div>
          </div>

          <Table
            style={{
              width: "100%",
              backgroundColor: "white",
              border: "1px solid #C6D2D9",
            }}
          >
            <thead style={{ border: "1px solid #C6D2D9", height: "3em" }}>
              <tr>
                <th style={{ width: "150em" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "8.5em",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        paddingLeft: "1.6em",
                        color: "#999",
                        height: "2em",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "400",
                      }}
                    >
                      TIME ENTRY
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image src="/image/sort.png" height={13} width={12} />
                    </div>
                  </div>
                </th>
                <th style={{ width: "33em" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "5.4em",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#999",
                        height: "2em",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "400",
                      }}
                    >
                      AMOUNT
                    </div>
                  </div>
                </th>
                <th style={{ width: "29em" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "5em",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#999",
                        height: "2em",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "400",
                      }}
                    >
                      USER
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image src="/image/sort.png" height={13} width={12} />
                    </div>
                  </div>
                </th>
                <th style={{ width: "29em" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "4em",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#999",
                        height: "2em",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "400",
                      }}
                    >
                      TIME
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image src="/image/sort.png" height={13} width={12} />
                    </div>
                  </div>
                </th>
                <th style={{ width: "36em" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "6.3em",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#999",
                        height: "2em",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "400",
                      }}
                    >
                      DURATION
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image src="/image/sort.png" height={13} width={12} />
                    </div>
                  </div>
                </th>
                <th style={{ width: "7em" }}>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "transparent",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "400",
                    }}
                  >
                    none
                  </div>
                </th>
              </tr>
            </thead>

            {rows.map((row: any) => (
              <tr
                key={row}
                style={{ border: "1px solid #C6D2D9", height: "4.5em" }}
              >
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "34em",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ paddingLeft: "1.5em" }}>
                      <div className={styles.reportsdetailedtodo}>
                        {row.todo}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "10em",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: `${row.color}`,
                        }}
                        className={styles.border}
                      ></div>
                      <div
                        style={{
                          color: `${row.color}`,
                        }}
                      >
                        {row.name}
                      </div>
                    </div>
                    <div>- {row.client}</div>
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
                      }}
                    >
                      {/* {row.client} */}
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
                    <div className={styles.reportdetaileduserstyle}>
                      {row.user}
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {row.access}
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "26%",
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
                      }}
                    >
                      {row.favorites}
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "2.5em",
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
                      style={{ display: "flex", alignItems: "center" }}
                      // className={style.hovereffect}
                    >
                      <Image
                        src="/image/favoritesnormal.svg"
                        height={25}
                        width={20}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ReportsDetailed;
