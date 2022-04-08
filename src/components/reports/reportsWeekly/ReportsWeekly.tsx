import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import { Switch, Table } from "@mui/material";
import Image from "next/image";
import React from "react";
import { styled } from "@mui/system";
import Dropdownheader from "../../../common/UiComponents/Dropdownheader";
import ReportsSubheader from "../reportsSubheader/ReportsSubheader";
import style from "../reportsWeekly/ReportsWeekly.module.css";
function createData(
  color: string,
  project: string,
  monday: any,
  tuesday: any,
  wednesday: any,
  thursday: any,
  friday: any,
  saturday: any,
  sunday: any,
  total: any
) {
  return {
    color,
    project,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    total,
  };
}

const rows = [
  createData(
    "#a3e8f7",
    "Project",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "-",
    "-",
    "00:00:00"
  ),
];

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
const ReportsWeekly = () => {
  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };
  return (
    <div>
      <ReportsSubheader />
      <div className={style.weeklyheaderpart}>
        <div className={style.leftpart}>
          <div className={style.totaltext}>
            <p style={{ paddingTop: "15px" }}>Total : </p>
            <p className={style.textstyle}>886:27:50</p>
          </div>
        </div>
        <div className={style.rightpart}>
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
          <div className={style.img}>
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
          <div className={style.img}>
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
          <div className={style.switchbuttontext}>
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
          <div className={style.textanddropdown}>
            <p>GroupBy :</p>
            <Dropdownheader
              defaultvalue="Project"
              // value1="Active"
              value2="Archived"
              value3="All"
            />
          </div>
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
              <th style={{ width: "36%" }}>
                <div
                  style={{
                    display: "flex",
                    width: "6.5em",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <div className={style.iconstyle}>
                    <Image
                      src="/image/chevron-down.svg"
                      alt="icon"
                      height={15}
                      width={15}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#999",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Project
                  </div>
                </div>
              </th>
              <th style={{ width: "8%" }}>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Mo, Mar 28
                  </div>
                </div>
              </th>
              <th style={{ width: "8%" }}>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#999",
                    height: "2em",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Tu, Mar 29
                </div>
              </th>
              <th style={{ width: "8%" }}>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    We, Mar 30
                  </div>
                </div>
              </th>
              <th style={{ width: "8%" }}>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Th, Mar 31
                  </div>
                </div>
              </th>
              <th style={{ width: "8%" }}>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Fr, Apr 1
                  </div>
                </div>
              </th>
              <th style={{ width: "8%" }}>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Sa, Apr 2
                  </div>
                </div>
              </th>
              <th style={{ width: "8%" }}>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Su, Apr 3
                  </div>
                </div>
              </th>
              <th style={{ width: "8%" }}>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Total :
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          {rows.map((row) => (
            <tr style={{ border: "1px solid #C6D2D9", height: "3.5em" }}>
              <td>
              <div style={{ paddingLeft: "1.5em" }}>
                <div
                  style={{ backgroundColor: `${row.color}` }}
                  className={style.border}
                ></div>
                {row.project}
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
                  <div className={style.borderstyle}></div>
                  <div className={style.numberstyle}>{row.monday}</div>
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
                  <div className={style.borderstyle}></div>
                  <div className={style.numberstyle}>{row.tuesday}</div>
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
                  <div className={style.borderstyle}></div>
                  <div className={style.numberstyle}>{row.wednesday}</div>
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
                  <div className={style.borderstyle}></div>
                  <div className={style.numberstyle}>{row.thursday}</div>
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
                  <div className={style.borderstyle}></div>
                  <div className={style.numberstyle}>{row.friday}</div>
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
                  <div className={style.borderstyle}></div>
                  <div className={style.numberstyle}>{row.saturday}</div>
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
                  <div className={style.borderstyle}></div>
                  <div className={style.numberstyle}>{row.sunday}</div>
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
                  <div className={style.borderstyle}></div>
                  <div className={style.numberstyle}>{row.total}</div>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ReportsWeekly;
