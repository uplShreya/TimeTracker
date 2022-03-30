import React from "react";
import TextFieldInput from "../../formFields/TextFieldInput";
import style from "../timetrackerdropdown/TimeTrackerDropDown.module.css";
import PropTypes from "prop-types";
import Image from "next/image";

function TimeTrackerDropDown(props:any) {
  return (
    <div>
      <div className={style.dropdown}>
          <div>
              {/* <Image src={props.icon} alt="icon" width={props.width} height={props.height}/> */}
          </div>
        <p className={style.droptext}>{props.name}</p>
        <div className={style.dropdowncontent}>
            <div>
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
            <div>
          <p>{props.value}</p></div>
          
        </div>
      </div>
    </div>
  );
}
TimeTrackerDropDown.prototype = {
    name: PropTypes.string,
  //   textclass: PropTypes.string,
    icon : PropTypes.object,
    width : PropTypes.string,
    height : PropTypes.string,
  };

export default TimeTrackerDropDown;
