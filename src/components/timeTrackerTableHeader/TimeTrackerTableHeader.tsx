import Image from "next/image";
import React from "react";
import style from "../timeTrackerTableHeader/TimeTrackerTableHeader.module.css";
import text from "../../common/en_US.json";

function TimeTrackerTable() {
  return (
    <div style={{ marginTop: "2em" }}>
      <div className={style.tableheader}>
        <div className={style.headingtop}>
          <div>
            <p>{text.yesterday}</p>
          </div>
          <div className={style.numberandimg}>
            <div>
              <p>{text.total} : </p>
              </div>
              <div className={style.text}>
              <p >00:00:00</p>
              </div>
            
            <div className={style.image1}>
              <Image
                src="/image/bulk-edit.svg"
                alt="icon"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeTrackerTable;
