import { fontSize } from "@mui/system";
import Image from "next/image";
import React from "react";
import TextFieldInput from "../../common/formFields/TextFieldInput";
import style from "../timeTrackerTablePart/TimeTrackerTablePart.module.css";
function TimeTrackerTablePart() {
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
            <ul>
              <li style={{
                  color: " teal"
                }}>
                <p style={{
                  color: " teal",
                  fontSize: "20px"
                }}>Project Name</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.border}></div>
          <div className={style.img}>
            <Image src="/image/tag.svg" alt="icon" width={25} height={25} />
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
          <div>
          <TextFieldInput
              type="number"
              id=""
              placeholder=""
              textnewclass={style.input}
            />
          </div>
          <div>
          <Image src="/image/calendar.svg" alt="icon" width={20} height={30} />
          </div>
          <div className={style.border}></div>
          <div className={style.text}>
            <p>00:00:00</p>
          </div>
          <div className={style.border}></div>
          <div className={style.img}>
          <Image src="/image/play.svg" alt="icon" width={28} height={28} />
          </div>
          <div className={style.border}></div>
          <div className={style.img}>
          <Image src="/image/menu-dots-vertical.svg" alt="icon" width={20} height={20} />
          </div>
          </div>
        </div>
      </div>
  );
}

export default TimeTrackerTablePart;
