import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from '../../common/calendar/Calendar';
import TextFieldInput from '../../common/formFields/TextFieldInput';
import TimeTrackerDropDown from '../../common/UiComponents/timetrackerdropdown/TimeTrackerDropDown';
import style from "../timeTracker/TimeTracker.module.css"
function TimeTrackerList(props : any) {
  const selectValue = [
    { name: "Duplicate", value: "Duplicate" },
    { name: "Delete", value: "Delete" },
  ];
  const selectValue1=[
    { name: "Automation", value: "Automation" },
    { name: "Break", value: "Break" },
    { name: "Learning & Development", value: "Learning & Development" },
    { name: "Misc", value: "Misc(Internal)" },
  ];
  const selectValue2 = [
    { name: "Assistance", value: "Assistance" },
    { name: "Debugging", value: "Debugging" },
    { name: "Deployment", value: "Deployment" },
    { name: "Development", value: "Development" },
    { name: "Discussion", value: "Discussion" },
  ];
const [open , setopen]=useState(true);

const openDatePicker=()=>{
  setopen(open);
  console.log(open , "open datepicker");
} 
    
  return (
    <div style={{
        height:"8em"
      }}>
       <div className={style.partheader}>
        <div className={style.left}>
          <div className={style.textfield}>
            <TextFieldInput
              type="text"
              id=""
              placeholder="What are you working on?"
              textnewclass={style.input1}
            />
          </div>
          <div className='dialogbox'>
        
      <TimeTrackerDropDown
      icon={true}
      name={"Project"}
      text={true}
      width={true}
      checkbox={false}
      selectOption1={selectValue1}
      textcolor={style.colorfortext}
      placeholder="Find Project or Client"
      border={true}
      // textnewclass={style.dropdowninput}
      value={"project"}/>
      </div>
        </div>
        <div className={style.right}>
          <div className={style.border}></div>
          <div className={style.img}>
            <TimeTrackerDropDown
              icon2={true}
              input={true}
              width={true}
              textcolor={style.liststyle}
              checkbox={true}
              selectOption1={selectValue2}
              placeholder="Add/Find Tag"
              border={true}
              text={false}
              // textnewclass={style.dropdowninput}
              value={"project"}
            />
          </div>
          <div className={style.border}></div>
          <div className={style.img2}>
          <Image src="/image/dollar.png" alt="icon" height={30} width={25}/>
          </div>
          <div className={style.border}></div>
          <div className={style.textfield}>
            <TextFieldInput
              type="number"
              id=""
              placeholder="09:30"
              textnewclass={style.input}
            />
          </div>
          -
          <div className={style.textfield}>
            <TextFieldInput
              type="number"
              id=""
              placeholder="18:30"
              textnewclass={style.input}
            />
          </div>
          <div>
            <Calendar/>
            {/* <Image
              src="/image/calendar.svg"
              alt="icon"
              width={20}
              height={30}
            /> */}
          </div>
          <div className={style.border}></div>
          <div className={style.Parttext}>
            <p>00:00:00</p>
          </div>
          <div>
        <button className={style.btn}>Start</button>
      </div>
      <div>
      <div>
        {/* onClick={selectclock} */}
        <Image src="/image/clock-blue.svg" alt="icon" width={12} height={12} />
        </div>
        <div>
        <Image src="/image/list-blue.svg" alt="icon" width={15} height={15}
         />
        <TimeTrackerList
        />
        </div>
      </div>
        </div>
      </div>
    </div>
      
  )
}

export default TimeTrackerList