import { fontSize } from "@mui/system";
import Image from "next/image";
import React from "react";
import TextFieldInput from "../../common/formFields/TextFieldInput";
import TimeTrackerDropDown from "../../common/uiComponents/timetrackerdropdown/TimeTrackerDropDown";
import style from "../timeTracker/TimeTracker.module.css";
function TimeTrackerTablePart(props:any) {
  return (
    <div>
      <div className={style.partheader}>
        <div className={style.left}>
          <div className={style.textfeild}>
            <TextFieldInput
              type="text"
              id=""
              placeholder="What are you working on?"
              textnewclass={style.input1}
            />
          </div>
          <div>
            <ul style={{
                  color: " orange"
                }}>
              <li >
                <p style={{
                  color: " orange",
                  fontSize: "15px"
                }}>{props.name}</p>
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
      placeholder="Add/Find Tag"
      text={false}
      // textnewclass={style.dropdowninput}
      value={"project"}/>
          </div>
          <div className={style.border}></div>
          <div className={style.img2}>
            <p>$</p>
          </div>
          <div className={style.border}></div>
          <div>
          <TextFieldInput
              type="number"
              id=""
              placeholder=""
              textnewclass={style.input}
            />
          </div>
          <div>-</div>
          <div>
          <TextFieldInput
              type="number"
              id=""
              placeholder=""
              textnewclass={style.input}
            />
          </div>
          <div>
          <Image src="/image/calendar.svg" alt="icon" width={20} height={30} 
          />
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
          input={false}
          border={false}
          value={"Duplicate"}
          />
          </div>
          </div>
        </div>
      </div>
  );
}

export default TimeTrackerTablePart;
