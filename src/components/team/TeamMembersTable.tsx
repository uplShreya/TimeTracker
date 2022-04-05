import React from 'react'
import TextFieldInput from '../../common/formFields/TextFieldInput'
import TimeTrackerDropDown from '../../common/uiComponents/timetrackerdropdown/TimeTrackerDropDown'
import style from '../team/Team.module.css'
function TeamMembersTable() {
  return (
    <div style={{
        backgroundColor:"white",
        height:"30em"
    }}>
        <div className={style.dropdownandtextfield}>
            <div>
                <TimeTrackerDropDown
                name={"Search"}
                text={true}/>
            </div>
        <div>
            <TextFieldInput
            type="Search"
            id=""
            textinputname=""
            textwidth={style.stylewidth}
            placeholder="Search by name or email"
            textnewclass={style.headerinput}/>
        </div>
        </div>
    </div>
  )
}

export default TeamMembersTable