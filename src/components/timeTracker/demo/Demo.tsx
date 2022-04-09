import Image from "next/image";
import React, { useState } from "react";
import style from '../demo/Demo.module.css'
import TimeTrackerHeader from "../TimeTrackerHeader";

function Demo() {
  const[open , setopen]=useState(true)
  
  return (
    <div>
      <div className={style.border}>
      <div style={{
        display:"flex"
      }}>
        
      {open ? 
        <TimeTrackerHeader/> : null
       }
      <div style={{float:"right"}}>
      <Image src="/image/clock-blue.svg" alt="icon" height={20} width={20}
        onClick={() => setopen(!open)}
         /></div>
      </div>
      <div style={{
        display:"flex"
      }}>
        {!open && 
          <TimeTrackerHeader/>
        }
      <Image src="/image/list-blue.svg" alt="icon" height={20} width={20}
         onClick={()=> setopen(!open)} />
      </div>
      </div>
    </div>
  );
}

export default Demo;

