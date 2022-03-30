import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import styles from '../ui.module.css'
const CommonDropdown = (props: any) => {
    return (
        <div>

            {props.dropdown &&
                <div>
                    <select name="cars" id="cars" className={styles.dropDown}>
                        <option value={props.firstvalue}>{props.firstName}</option>
                        <option value={props.secoundvalue}>{props.secoundNmae}</option>
                        
                    </select>
                </div>}

        </div>

    )
}

export default CommonDropdown