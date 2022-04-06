import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import styles from '../ui.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
const CommonDropdown = (props: any) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <div>

            {props.dropdown &&
                <div className={styles.dropDown}>

                    <FormControl fullWidth sx={{ m: 1, minWidth: 110, height: 28, justifyContent: 'center' }}>
                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            // label={props.firstvalue}
                            onChange={handleChange}
                        >
                            <MenuItem value={props.firstvalue}>{props.firstName}</MenuItem>
                            <MenuItem value={props.secoundvalue}>{props.secoundNmae}</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <select name="cars" id="cars" className={styles.dropDown}>
                        <option className={styles.dropDown_option} value={props.firstvalue}>{props.firstName} </option>
                        <option className={styles.dropDown_option} value={props.secoundvalue}>{props.secoundNmae}</option>
                    </select> */}
                </div>}

        </div>

    )
}

export default CommonDropdown