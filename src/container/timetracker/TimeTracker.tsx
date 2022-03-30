import React from 'react'
import TimeTrackerHeader from '../../components/timeTracker/TimeTrackerHeader'
import style from "../../components/timeTracker/TimeTracker.module.css"
import TimeTrackerSubHeading from '../../components/timeTracker/TimeTrackerSubHeading'
import TimeTrackerTable from '../../components/timeTracker/TimeTrackerTableHeader'
import TimeTrackerTablePart from '../../components/timeTracker/TimeTrackerTablePart'
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
    </div>
  )
}

export default TimeTracker