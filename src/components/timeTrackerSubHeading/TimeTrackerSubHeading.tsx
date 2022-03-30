import React from 'react'
import style from "../timeTrackerSubHeading/TimeTrackerSubHeading.module.css";
import text from "../../common/en_US.json";
import Image from 'next/image';

function TimeTrackerSubHeading() {
  return (
    <div style={{
        marginTop:"2em"
    }}>
        <div className={style.header}>
          <div className={style.weektext}>
            <p>{text.thisweek}</p>
          </div>
          <div className={style.totalnumber}>
            <div>
              <p>{text.weektotal} : </p>
              </div>
              <div className={style.text}>
              <p >00:00:00</p>
              </div>
          </div>
        </div>
      </div>
   
  )
}

export default TimeTrackerSubHeading