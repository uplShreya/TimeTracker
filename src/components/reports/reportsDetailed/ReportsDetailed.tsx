import React from "react";
import ReportsSubheader from "../reportsSubheader/ReportsSubheader";
import Table from "@mui/material/Table";
import Image from "next/image";
// import style from "../../components/projects/Project.module.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const ReportsDetailed = () => {
  function createData(
    name: string,
    client: string,
    tracked: number,
    access: string,
    favorites: string,
    color: string,
    icon: any
  ) {
    return { name, client, tracked, access, favorites, color, icon };
  }

  const rows = [
    createData(
      "Automation",
      "Abhijit Roy",
      0.17,
      "_",
      "Public",
      "#a3e8f7",
      StarBorderOutlinedIcon
    ),
    createData(
      "Break",
      "Abhijit Roy",
      9.0,
      "_ ",
      "Public",
      "red",
      StarBorderOutlinedIcon
    ),
    createData(
      "Learning & Development",
      "Abhijit Roy",
      372.79,
      "_",
      "Public",
      "blue",
      StarBorderOutlinedIcon
    ),
    createData(
      "Menzie.net",
      "Marc",
      0.25,
      " _",
      "Public",
      "#1c914b",
      StarBorderOutlinedIcon
    ),
    createData(
      "Misc(internal)",
      "Abhijit Roy",
      110.92,
      "_",
      "Public",
      "#34cfeb",
      StarBorderOutlinedIcon
    ),
    createData(
      "MySitePower",
      "Steve Dollens",
      71.44,
      "_",
      "Private",
      "#f72ad4",
      StarBorderOutlinedIcon
    ),
    createData(
      "OpeningBell",
      "Mahitech",
      43.8,
      "_",
      "Private",
      "green",
      StarBorderOutlinedIcon
    ),
  ];

  return (
    <div>
      <ReportsSubheader />
      <div>
        <div style={{ padding: "2em 0 0 0" }}>
          <div
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
            <p>Projects</p>
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
                <th style={{ width: "39em" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "5.5em",
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
                      NAME
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
                      width: "4.5em",
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
                      CLIENT
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
                      width: "5.5em",
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
                      TRACKED
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
                      fontSize: "13px",
                      color: "#999",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "400",
                    }}
                  >
                    ACCESS
                  </div>
                </th>
                <th style={{ width: "36em" }}>
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
                    FAVORITES
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

            {rows.map((row) => (
              <tr style={{ border: "1px solid #C6D2D9", height: "4.5em" }}>
                <td>
                  <div style={{ paddingLeft: "1.5em" }}>
                    <div
                      style={{ backgroundColor: `${row.color}` }}
                      // className={style.border}
                    ></div>
                    {row.name}
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
                      {row.client}
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "left",
                      }}
                    >
                      {row.tracked}
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
