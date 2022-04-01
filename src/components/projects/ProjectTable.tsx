import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import style from "../../components/projects/Project.module.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

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

export default function ProjectTable() {
  return (
    <div style={{ padding: "2em" }}>
      <div
        style={{
          border: "1px solid #C6D2D9",
          width: "108.5%",
          borderRadius: "2px",

          backgroundColor: "rgb(228, 234, 238)",
          height: "3em",
          display: "flex",
          alignItems: "center",
          paddingLeft: "11px",
          color: "#999",
          fontSize: "13px",
        }}
      >
        <p>Projects</p>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div
                  style={{
                    fontSize: "13px",
                    paddingLeft: "11px",
                    color: "#999",
                    height: "2em",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>NAME</p>
                </div>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#999",
                    height: "2em",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>CLIENT</p>
                </div>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#999",
                    height: "2em",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>TRACKED</p>
                </div>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#999",
                    height: "2em",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>ACCESS</p>
                </div>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#999",
                    height: "2em",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>FAVORITES</p>
                </div>
              </TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div>
                    <div
                      style={{ backgroundColor: `${row.color}` }}
                      className={style.border}
                    ></div>
                    {row.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "49%",
                    }}
                  >
                    <div
                      style={{
                        borderLeft: "1px dotted gray",
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
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "35%",
                    }}
                  >
                    <div
                      style={{
                        borderLeft: "1px dotted gray",
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
                      {row.tracked}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "35%",
                    }}
                  >
                    <div
                      style={{
                        borderLeft: "1px dotted gray",
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
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "35%",
                    }}
                  >
                    <div
                      style={{
                        borderLeft: "1px dotted gray",
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
                </TableCell>

                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "142%",
                    }}
                  >
                    <div
                      style={{
                        borderLeft: "1px dotted gray",
                        marginTop: "5px",
                        height: "3em",
                      }}
                    ></div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <StarBorderOutlinedIcon />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
