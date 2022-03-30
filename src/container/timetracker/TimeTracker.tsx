import React from 'react'
import TimeTrackerHeader from '../../components/timeTracker/TimeTrackerHeader'
import style from "../../components/timeTracker/TimeTracker.module.css"
import TimeTrackerSubHeading from '../../components/timeTracker/TimeTrackerSubHeading'
import TimeTrackerTable from '../../components/timeTracker/TimeTrackerTableHeader'
import TimeTrackerTablePart from '../../components/timeTracker/TimeTrackerTablePart'
import TimeTrackerDropDown from '../../common/uiComponents/timetrackerdropdown/TimeTrackerDropDown'
import plus from "../../../public/image/plus-blue.svg";
function TimeTracker() {
  return (
    <div className={style.body}>
      <TimeTrackerHeader/>
      <TimeTrackerSubHeading/>
      <TimeTrackerTable/>
      <TimeTrackerTablePart
      name={'Project Name'}/>
      <TimeTrackerTablePart
      name={'Break'}/>
      <TimeTrackerTablePart
      name={'Project Name'}/>
      <TimeTrackerDropDown
      name={"Project Name"}
      value={"project"}/>
    </div>
  )
}

export default TimeTracker