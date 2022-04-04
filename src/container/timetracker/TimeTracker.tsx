import React from 'react'
import TimeTrackerHeader from '../../components/timeTracker/TimeTrackerHeader'
import style from "../../components/timeTracker/TimeTracker.module.css"
import TimeTrackerSubHeading from '../../components/timeTracker/TimeTrackerSubHeading'
import TimeTrackerTable from '../../components/timeTracker/TimeTrackerTableHeader'
import TimeTrackerTablePart from '../../components/timeTracker/TimeTrackerTablePart'
import TimeTrackerDropDown from '../../common/uiComponents/timetrackerdropdown/TimeTrackerDropDown'
import plus from "../../../public/image/plus-blue.svg";
import Calendar from '../../common/calendar/Calendar'
import TimeTrackerList from '../../components/timeTracker/TimeTrackerList'


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
     {/* <Calendar/> */}
     <TimeTrackerList/>

    </div>
  )
}

export default TimeTracker