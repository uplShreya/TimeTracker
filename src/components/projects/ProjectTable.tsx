import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  client: string,
  tracked: number,
  access: string,
  favorites: string
) {
  return { name, client, tracked, access, favorites };
}

const rows = [
  createData("Automation", "Abhijit Roy", 0.17, " ", "Public"),
  createData("Break", "Abhijit Roy", 9.0, " ", "Public"),
  createData("Learning & Development", "Abhijit Roy", 372.79, " ", "Public"),
  createData("Menzie.net", "Marc", 0.25, " ", "Public"),
  createData("Misc(internal)", "Abhijit Roy", 110.92, " ", "Public"),
  createData("MySitePower", "Steve Dollens", 71.44, " ", "Private"),
  createData("OpenungBell", "Mahitech", 43.8, " ", "Private"),
];

export default function ProjectTable() {
  return (
    <div style={{ padding: "2em" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>CLIENT</TableCell>
              <TableCell>TRACKED</TableCell>
              <TableCell>ACCESS</TableCell>
              <TableCell>FAVORITES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.client}</TableCell>
                <TableCell>{row.tracked}</TableCell>
                <TableCell>{row.access}</TableCell>
                <TableCell>{row.favorites}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
