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
  number: number,
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
    number,
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
    6,
    "gray",
    "(Without Project) ",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "-",
    "-",
    "00:00:00"
  ),
  createData(
    1,
    "#a3e8f7",
    "Automation ",
    "-",
    "-",
    "-",
    "00:00:00",
    "-",
    "-",
    "-",
    "00:00:00"
  ),
  createData(
    21,
    "red",
    "Break ",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "-",
    "-",
    "00:00:00"
  ),
  createData(
    2,
    "rgb(3, 169, 244)",
    " Internals ",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "-",
    "-",
    "00:00:00"
  ),
  createData(
    6,
    "purple",
    " Learning & Development ",
    "00:00:00",
    "00:00:00",
    "00:00:00",
    "-",
    "-",
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
      <div
        style={{
          marginTop: "10px",
        }}
      >
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
                value2="User"
                dropdowntextfieldinputstyle={style.style}
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
                <th>
                  <div className={style.iconstyle}>
                    <Image
                      src="/image/chevron-down.svg"
                      alt="icon"
                      height={15}
                      width={15}
                    />
                  </div>
                </th>
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
                    <div
                      style={{
                        fontSize: "16px",
                        color: "#999",
                        fontWeight: "500",
                        fontFamily: "Arial",
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
                    <div className={style.tableheaderdata}>Mo, Mar 28</div>
                  </div>
                </th>
                <th style={{ width: "8%" }}>
                  <div className={style.tableheaderdata}>Tu, Mar 29</div>
                </th>
                <th style={{ width: "8%" }}>
                  <div>
                    <div className={style.tableheaderdata}>We, Mar 30</div>
                  </div>
                </th>
                <th style={{ width: "8%" }}>
                  <div>
                    <div className={style.tableheaderdata}>Th, Mar 31</div>
                  </div>
                </th>
                <th style={{ width: "8%" }}>
                  <div>
                    <div className={style.tableheaderdata}>Fr, Apr 1</div>
                  </div>
                </th>
                <th style={{ width: "8%" }}>
                  <div>
                    <div className={style.tableheaderdata}>Sa, Apr 2</div>
                  </div>
                </th>
                <th style={{ width: "8%" }}>
                  <div>
                    <div className={style.tableheaderdata}>Su, Apr 3</div>
                  </div>
                </th>
                <th>
                  <div>
                    <div className={style.tableheaderdatatotal}>Total :</div>
                  </div>
                </th>
              </tr>
            </thead>

            {rows.map((row) => (
              <tr style={{ border: "1px solid #C6D2D9", height: "4.5em" }}>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "39%",
                    }}
                  >
                    <div className={style.numberstyle1}>{row.number}</div>
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "5px",
                      color: `${row.color}`,
                    }}
                  >
                    <div
                      style={{ backgroundColor: `${row.color}` }}
                      className={style.border}
                    ></div>
                    {row.project}
                    <div
                      style={{
                        color: "darkgray",
                      }}
                    >
                      <p>-Abhijit Roy </p>
                    </div>
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
                    <div className={style.numberstylefortotal}>{row.total}</div>
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

export default ReportsWeekly;
