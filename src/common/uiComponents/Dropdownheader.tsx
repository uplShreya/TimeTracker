import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextFieldInput from "../formFields/TextFieldInput";
import style from "../../components/projects/Project.module.css";
import { Checkbox } from "@mui/material";

function Dropdownheader(props: any) {
  const [project, setProject] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setProject(event.target.value);
    // console.log(event, "events");
  };
  const [open, setOpen] = React.useState(true);
  const active = () => {
    setOpen(!open);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel id="demo-simple-select-standard-label">
          {props.placeholder}
        </InputLabel> */}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={project}
          onChange={handleChange}
          disableUnderline
          // IconComponent="span"
          displayEmpty
        >
          {props.input && (
            <TextFieldInput
              placeholder={props.dropdownplaceholder}
              extracls={props.dropdowntextfieldstyle}
              textnewclass={props.dropdowntextfieldinputstyle}
            />
          )}
          {/* {props.border && (
            <div
              style={{
                borderBottom: "1px solid #e4eaee",
                height: "1em",
              }}
            ></div>
          )} */}
          <div>
            {props.showactive && (
              <div className={style.dropdownmenuflex}>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#999",
                    display: "flex",
                    alignItems: "center",
                    height: "2.5em",
                  }}
                >
                  {props.f1}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#999",
                    display: "flex",
                    alignItems: "center",
                    height: "2.5em",
                  }}
                  onClick={active}
                >
                  {/* <Dropdownheader value1="Active" value2="Archived" value3="All" /> */}
                  {props.f2}
                </div>
              </div>
            )}
            {props.border && (
              <div
                style={{
                  borderBottom: "1px solid #e4eaee",
                }}
              ></div>
            )}
          </div>
          {/* forhideunhide */}
          {!open && (
            <div>
              <li
                style={{
                  backgroundColor: "#e4eaee",
                  height: "2.5em",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "9%",
                }}
              >
                Active
              </li>
              <li
                style={{
                  backgroundColor: "#f5fafa",
                  height: "2.5em",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "9%",
                }}
              >
                Archived
              </li>
              <li
                style={{
                  backgroundColor: "#f5fafa",
                  height: "2.5em",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "9%",
                }}
              >
                All
              </li>
            </div>
          )}
          {props.checkboxselectclient && (
            <div>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Select all</p>
              </li>
              {props.border && (
                <div
                  style={{
                    borderBottom: "1px solid #e4eaee",
                  }}
                ></div>
              )}
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Without Client</p>
              </li>
              {props.border && (
                <div
                  style={{
                    borderBottom: "1px solid #e4eaee",
                  }}
                ></div>
              )}
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Abhijit Roy</p>
              </li>

              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Mahitech</p>
              </li>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Marc</p>
              </li>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Steve Dollens</p>
              </li>
            </div>
          )}
          {props.checkboxselectgroups && (
            <div>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Select all</p>
              </li>
              {props.border && (
                <div
                  style={{
                    borderBottom: "1px solid #e4eaee",
                  }}
                ></div>
              )}
              <p
                style={{
                  display: "flex",
                  paddingLeft: "8%",
                  fontSize: "14px",
                  color: "#999",
                }}
              >
                GROUPS
              </p>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Backend</p>
              </li>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Device Team</p>
              </li>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Frontend</p>
              </li>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Management</p>
              </li>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>Testing</p>
              </li>
              <li style={{ display: "flex", paddingLeft: "7%" }}>
                <Checkbox />
                <p className={style.listnamefontsize}>UI/UX</p>
              </li>
            </div>
          )}
          <div>
            <p
              style={{
                display: "flex",
                paddingLeft: "7%",
                fontSize: "14px",
                color: "#999",
              }}
            >
              {props.users}
            </p>

            {props.selectoptionusers &&
              props.selectoptionusers.map((item: any) => (
                <li style={{ display: "flex", paddingLeft: "7%" }}>
                  <Checkbox />
                  <p className={style.listnamefontsize}>{item.value}</p>
                </li>
              ))}
          </div>
          <MenuItem value="">
            <div style={{ color: "gray" }}>{props.defaultvalue}</div>
          </MenuItem>
          <MenuItem value={1}>
            <div style={{ color: "gray" }}>{props.value1}</div>
          </MenuItem>
          <MenuItem value={2}>
            <div style={{ color: "gray" }}>{props.value2}</div>
          </MenuItem>
          <MenuItem value={3}>
            <div style={{ color: "gray" }}>{props.value3}</div>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default Dropdownheader;
