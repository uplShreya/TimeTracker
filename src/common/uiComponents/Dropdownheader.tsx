import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Dropdownheader(props: any) {
  const [project, setProject] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setProject(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={project}
          onChange={handleChange}
        >
          <MenuItem value="">
            <div>WORKSPACES</div>
          </MenuItem>
          <MenuItem value={1}>{props.value1}</MenuItem>
          <MenuItem value={2}>{props.value2}</MenuItem>
          <MenuItem value={3}>{props.value3}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default Dropdownheader;
