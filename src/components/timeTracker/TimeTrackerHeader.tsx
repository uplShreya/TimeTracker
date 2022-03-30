import Image from 'next/image';
import React, { useState } from 'react'
import Dialogbox from '../../common/uiComponents/dialogbox/DialogBox'
import TextFieldInput from '../../common/formFields/TextFieldInput'
// import styled from "styled-components";
import style from "../timeTracker/TimeTracker.module.css"
// import TimePicker from 'react-time-picker';
// import Plusicon from "../../../public/image/plus-blue.svg";
import text from "../../common/en_US.json";
import TimeTrackerDropDown from '../../common/uiComponents/timetrackerdropdown/TimeTrackerDropDown';
// import { blue } from '@mui/material/colors';
function TimeTrackerHeader() {

  const [value, onChange] = useState('10:00');
  return (
    <div style={{
      marginTop:"2em"
    }}>
    <div className={style.header}>
      <div className={style.topheader}>
        <div className={style.topheaderleft} >
      <div
      className={style.textfeild}>
      <TextFieldInput
        // label="text"
        type="text"
        id=""
        // name="Project Name"
        textinputname=""
        placeholder="What are you working on?"
        textnewclass={style.headerinput}
        // textnewclass={``}
      />
      </div>
      </div>
      <div className={style.topheaderright}>
      <div className='dialogbox'>
        
      <TimeTrackerDropDown
      // icon={'/image/plus-blue.svg'}
      // width={"20"}
      // height={"20"}
      name={"Project Name"}
      value={"project"}/>
      </div>
      
      
      <div className={style.border}>
      </div>
      <div className={style.img}>
      <Image src="/image/tag.svg" alt="icon" width={25} height={25} />
      </div>
      <div className={style.border}>
      </div>
      <div className={style.img2}>
      <p>$</p>
      </div>
      <div className={style.border}>
      </div>
      <div className={style.timer}>
      <p>00:00:00</p>
      </div>
      <div>
        <button>Start</button>
      </div>
      <div>
        <div>
        <Image src="/image/clock-blue.svg" alt="icon" width={12} height={12} />
        </div>
        <div>
        <Image src="/image/list-blue.svg" alt="icon" width={15} height={15} />
        </div>
      </div>
      {/* <TimePicker onChange={onChange} value={value} /> */}
      </div>
    </div>
    </div>
    </div>
  )
}

export default TimeTrackerHeader