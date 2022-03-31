import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextFieldInput from "../formFields/TextFieldInput";
import style from "../../components/projects/Project.module.css";

function Dropdownheader(props: any) {
  const [project, setProject] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setProject(event.target.value);
    console.log(event, "events");
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
          {props.border && (
            <div
              style={{
                borderBottom: "1px dotted gray",
                height: "1em",
              }}
            ></div>
          )}
          <div className={style.dropdownmenuflex}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {props.f1}
            </div>
            <div>
              <Dropdownheader value1="Active" value2="Archived" value3="All" />
            </div>
          </div>
          <MenuItem value="">{props.defaultvalue}</MenuItem>
          <MenuItem value={1}>{props.value1}</MenuItem>
          <MenuItem value={2}>{props.value2}</MenuItem>
          <MenuItem value={3}>{props.value3}</MenuItem>
          {/* <MenuItem value={4}>
            <div className="dropdownmenuflex">
              <div>{props.f1}</div>
              <div>{props.f2}</div>
            </div>
          </MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
export default Dropdownheader;
