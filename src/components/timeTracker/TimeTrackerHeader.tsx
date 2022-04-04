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
import { height } from '@mui/system';
import TimeTrackerList from './TimeTrackerList';
// import { blue } from '@mui/material/colors';
function TimeTrackerHeader() {
  const selectValue1=[
    { name: "Automation", value: "Automation" },
    { name: "Break", value: "Break" },
    { name: "Learning & Development", value: "Learning & Development" },
    { name: "Misc", value: "Misc(Internal)" },
  ];
  const selectValue2=[
    { name: "Assistance", value: "Assistance" },
    { name: "Debugging", value: "Debugging" },
    { name: "Deployment", value: "Deployment" },
    { name: "Development", value: "Development" },
    { name: "Discussion", value: "Discussion" },
  ];
  const[click , setclick]= useState(false)
const select=() =>{
setclick(!click)
console.log(setclick ,"Click")
}

const[clockclick , setclockclick]=useState(true)
const selectclock=()=>{
  setclockclick(!open)
  console.log(setclockclick , "click is working")
}

  // const [value, onChange] = useState('10:00');
  return (
    <div style={{
      marginTop:"2em",
      height:"8em"
    }}>
    <div className={style.header}>
      <div className={style.topheader}>
        <div className={style.topheaderleft} >
      <div
      className={style.textfield}>
      <TextFieldInput
        type="text"
        id=""
        textinputname=""
        textwidth={style.stylewidth}
        placeholder="What are you working on?"
        textnewclass={style.headerinput}
      />
      </div>
      </div>
      <div className={style.topheaderright}>
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
      
      
      <div className={style.border}>
      </div>
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
      value={"project"}/>
      
      </div>
      <div className={style.border}>
      </div>
      <div className={style.img2}>
     <Image src="/image/dollar.png" alt="icon" height={30} width={25}/>
      
       {/* <p>$</p> */}
      </div>
      <div className={style.border}>
      </div>
      <div className={style.timer}>
      <p>00:00:00</p>
      </div>
      <div>
        <button className={style.btn}>Start</button>
      </div>
      </div>
      <div>
      <div
        onClick={selectclock}>
        <Image src="/image/clock-blue.svg" alt="icon" width={12} height={12} />
        </div>
        <div
        onClick={select}>
        <Image src="/image/list-blue.svg" alt="icon" width={15} height={15}
         />{click &&( 
        <TimeTrackerList
        />)}
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default TimeTrackerHeader