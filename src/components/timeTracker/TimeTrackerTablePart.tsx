
import { fontSize } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "../../common/calendar/Calendar";
import TextFieldInput from "../../common/formFields/TextFieldInput";
import TimeTrackerDropDown from "../../common/UiComponents/timetrackerdropdown/TimeTrackerDropDown";
import style from "../timeTracker/TimeTracker.module.css";
// import DatePicker from "react-datepicker";

function TimeTrackerTablePart(props: any) {
  const selectValue = [
    { name: "Duplicate", value: "Duplicate" },
    { name: "Delete", value: "Delete" },
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
    <div>
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
          <div>
            <ul
              style={{
                color: " orange",
              }}
            >
              <li>
                <p
                  style={{
                    color: " orange",
                    fontSize: "15px",
                  }}
                >
                  {props.name}
                </p>
              </li>
            </ul>
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
          <div className={style.border}></div>
          <div className={style.img}>
            <Image src="/image/play.svg" alt="icon" width={20} height={20} />
          </div>
          <div className={style.border}></div>
          <div className={style.dropdownimg}>
            <TimeTrackerDropDown
              icon1={true}
              width1={true}
              // value={item.value}
              selectOption={selectValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeTrackerTablePart;
