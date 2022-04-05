import React from 'react'
import style from "../timeTracker/TimeTracker.module.css";
import text from "../../common/en_US.json";
import Image from 'next/image';

function TimeTrackerSubHeading() {
  return (
    <div style={{
        height:"3em"
    }}>
        <div className={style.subheadingheader}>
          <div className={style.weektext}>
            <p>{text.thisweek}</p>
          </div>
          <div className={style.totalnumber}>
            <div className={style.weektotaltext}>
              <p>{text.weektotal} : </p>
              </div>
              <div className={style.subheadingtext}>
              <p >00:00:00</p>
              </div>
          </div>
        </div>
      </div>
   
  )
}

export default TimeTrackerSubHeading