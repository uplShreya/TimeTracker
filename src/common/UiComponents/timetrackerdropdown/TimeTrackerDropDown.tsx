import React, { useState } from "react";
import TextFieldInput from "../../formFields/TextFieldInput";
import style from "../timetrackerdropdown/TimeTrackerDropDown.module.css";
import PropTypes from "prop-types";
import Image from "next/image";
import { Checkbox, MenuItem } from "@mui/material";

function TimeTrackerDropDown(props: any) {
  const [open, setopen] = useState(false);
  const dropdownopenclick = () => {
    setopen(!open);
  };

  return (
    <div>
      <div className={style.dropdown}>
        <div className={style.imgdesign} onClick={dropdownopenclick}>
          <div className={style.imgstyle}>
            {props.icon && (
              <Image
                src="/image/plus-blue.svg"
                alt="icon"
                width={20}
                height={20}
              />
            )}
          </div>
          <div className={style.imgstyle1}>
            {props.icon1 && (
              <Image
                src="/image/menu-dots-vertical.svg"
                alt="icon"
                width={10}
                height={25}
              />
            )}
          </div>
          <div className={style.imgstyle2}>
            {props.icon2 && (
              <Image src="/image/tag.svg" alt="icon" width={22} height={22} />
            )}
          </div>

          {props.text && <p className={style.droptext}>{props.name}</p>}
        </div>
        {open && props.width && (
          <div className={style.dropdowncontent}>
            <div className={style.textfield1}>
              {/* <TextFieldInput
                type="search"
                id=""
                textinputname=""
                extracls={props.textwidth}
                placeholder={props.placeholder}
                textnewclass={style.headerinput1}
              /> */}
              <input type="search"
              placeholder={props.placeholder} 
              className={style.input}/>
            </div>
            {props.border && <div className={style.border}></div>}
            <div>
              {props.selectOption1 &&
                props.selectOption1.map((item: any) => (
                  <ul className={props.textcolor}>
                <li>
                  {props.checkbox && (<Checkbox/>)}
                  {item.value}
                  </li>
                  </ul>
                ))}
            </div>
          </div>
        )}
        {open && props.width1 && (
          <div className={style.dropdowncontent1}>
            {props.selectOption &&
              props.selectOption.map((item: any) => (
                <div>
                  <p>{item.value}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
TimeTrackerDropDown.prototype = {
  name: PropTypes.string,
  //   textclass: PropTypes.string,
  icon: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  inputname: PropTypes.string,
};

export default TimeTrackerDropDown;
