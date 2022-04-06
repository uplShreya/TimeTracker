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
                <div className={`{styles.dropDown} ${props.dropdownclass}`}>

                    <FormControl fullWidth sx={{ m: 1, minWidth: 110, height: 28, justifyContent: 'center' }}>
                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            // label={props.firstvalue}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <div>{props.firstName}</div>
                            </MenuItem>
                            <MenuItem value={props.firstvalue}>{props.firstName}</MenuItem>
                            <MenuItem value={props.secoundvalue}>{props.secoundName}</MenuItem>
                            <MenuItem value={props.thirdvalue}>{props.ThirdName}</MenuItem>
                            <MenuItem value={props.fourthvalue}>{props.fourthName}</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <select name="cars" id="cars" className={styles.dropDown}>
                        <option className={styles.dropDown_option} value={props.firstvalue}>{props.firstName} </option>
                        <option className={styles.dropDown_option} value={props.secoundvalue}>{props.secoundNmae}</option>
                        
                    </select> */}
                    {/* <FormControl sx={{ m: 1, minWidth: 110, height: 28, justifyContent: 'center', border: 'black' }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{border: 'black' }}
                        >
                            <MenuItem value={props.firstName}>
                                <em>{props.firstName}</em>
                            </MenuItem>
                            <MenuItem value={props.firstvalue}>{props.firstName}</MenuItem>
                            <MenuItem value={props.secoundvalue}>{props.secoundNmae}</MenuItem>
                        </Select>
                    </FormControl> */}
                </div>}

        </div>

    )
}

export default CommonDropdown