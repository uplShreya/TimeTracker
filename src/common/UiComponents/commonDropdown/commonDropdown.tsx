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
                            {/* <MenuItem value="">
                                <div>{props.firstName}</div>
                            </MenuItem> */}
                            <MenuItem value="">{props.firstName}</MenuItem>
                            <MenuItem value={props.secoundvalue}>{props.secoundNmae}</MenuItem>
                            <MenuItem value={props.thirdvalue}>{props.ThirdNmae}</MenuItem>
                            <MenuItem value={props.fourthvalue}>{props.fourthNmae}</MenuItem>
                            <MenuItem value={props.fifthvalue}>{props.fifthNmae}</MenuItem>
                            <MenuItem value={props.sixthvalue}>{props.sixthNmae}</MenuItem>
                            <MenuItem value={props.seventhvalue}>{props.seventhNmae}</MenuItem>
                            <MenuItem value={props.eighthvalue}>{props.eighthName}</MenuItem>
                            <MenuItem value={props.ninthvalue}>{props.ninthNmae}</MenuItem>
                            <MenuItem value={props.tenthvalue}>{props.tenthNmae}</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>}

        </div>

    )
}

export default CommonDropdown