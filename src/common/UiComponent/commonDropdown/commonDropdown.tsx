import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import styles from '../ui.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
const CommonDropdown = (props: any) => {
    return (
        <div>

            {props.dropdown &&
                <div>
                    <select name="cars" id="cars" className={styles.dropDown}>
                        <option className={styles.dropDown_option} value={props.firstvalue}>{props.firstName} </option>
                        <option className={styles.dropDown_option} value={props.secoundvalue}>{props.secoundNmae}</option>
                        
                    </select>
                    {/* <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            // label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl> */}
                </div>}

        </div>

    )
}

export default CommonDropdown