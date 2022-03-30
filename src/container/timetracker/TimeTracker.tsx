import React from 'react'
import TimeTrackerHeader from '../../components/timeTrackerHeader/TimeTrackerHeader'
import style from "../../components/timeTrackerHeader/TimeTrackerHeader.module.css"
import TimeTrackerSubHeading from '../../components/timeTrackerSubHeading/TimeTrackerSubHeading'
import TimeTrackerTable from '../../components/timeTrackerTableHeader/TimeTrackerTableHeader'
import TimeTrackerTablePart from '../../components/timeTrackerTablePart/TimeTrackerTablePart'
function TimeTracker() {
  return (
    <div className={style.body}>
      <TimeTrackerHeader/>
      <TimeTrackerSubHeading/>
      <TimeTrackerTable/>
      <TimeTrackerTablePart/>
    </div>
  )
}

export default TimeTracker