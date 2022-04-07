import React from "react";
import TextFieldInput from "../../../common/formFields/TextFieldInput";
import Dropdownheader from "../../../common/UiComponents/Dropdownheader";
import style from "../../reports/reportsSubheader/ReportsSubheader.module.css";

const ReportsSubheader = () => {
  const selectusers = [
    { name: "Abhijit Roy", value: "Abhijit Roy" },
    { name: "Alolika", value: "Alolika" },
    { name: "Amartya Chakraborty", value: "Amartya Chakraborty" },
    { name: "Ankita Kumari", value: "Ankita Kumari" },
    { name: "Ayan", value: "Sinha" },
  ];
  const selctteams = [
    { name: "Backend", value: "Backend" },
    { name: "Device Team", value: "Device Team" },
    { name: "Frontend", value: "Frontend" },
    { name: "Management", value: "Management" },
    { name: "Testing", value: "Testing" },
    { name: "UI/UX", value: "UI/UX" },
  ];
  return (
    
     
        <div className={style.projectheaderleftright}>
          <div className={style.projectheaderleft}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p style={{ color: "#595959" }}>Active</p> */}
              <Dropdownheader
                defaultvalue="Filter"
                // value1="Active"
                value2="Archived"
                value3="All"
              />
            </div>
            <div className={style.projectheaderdottedborde}></div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p style={{ color: "#595959" }}>Active</p> */}
              <Dropdownheader
                defaultvalue="Team"
                border={true}
                showactive={true}
                input={true}
                dropdownplaceholder="Find member or group"
                users="USERS"
                dropdowntextfieldstyle={style.textfieldstyle}
                dropdowntextfieldinputstyle={style.textfieldinputstyle}
                checkboxselectgroups={true}
                GROUPS="GROUPS"
                selectoptionusers={selectusers}
                selectoptionteams={selctteams}
                f1="SHOW"
                f2="ACTIVE"
              />
            </div>
            <div className={style.projectheaderdottedborde}></div>

            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p style={{ color: "#595959" }}>Client</p> */}
              <Dropdownheader
                checkboxselectclient={true}
                showactive={true}
                defaultvalue="Client"
                input={true}
                border={true}
                dropdownplaceholder="Search Client"
                dropdowntextfieldstyle={style.textfieldstyle}
                dropdowntextfieldinputstyle={style.textfieldinputstyle}
                f1="SHOW"
                f2="ACTIVE"
              />
            </div>

            <div className={style.projectheaderdottedborde}></div>

            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p style={{ color: "#595959" }}>Project</p> */}
              <Dropdownheader
                defaultvalue="Project"
                border={true}
                showactive={true}
                input={true}
                dropdownplaceholder="Find member or group"
                users="USERS"
                dropdowntextfieldstyle={style.textfieldstyle}
                dropdowntextfieldinputstyle={style.textfieldinputstyle}
                checkboxselectgroups={true}
                GROUPS="GROUPS"
                selectoptionusers={selectusers}
                selectoptionteams={selctteams}
                f1="SHOW"
                f2="ACTIVE"
              />
            </div>
            <div className={style.projectheaderdottedborde}></div>

            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p style={{ color: "#595959" }}>Project</p> */}
              <Dropdownheader
                defaultvalue="Task"
                border={true}
                showactive={true}
                input={true}
                dropdownplaceholder="Find member or group"
                users="USERS"
                dropdowntextfieldstyle={style.textfieldstyle}
                dropdowntextfieldinputstyle={style.textfieldinputstyle}
                checkboxselectgroups={true}
                GROUPS="GROUPS"
                selectoptionusers={selectusers}
                selectoptionteams={selctteams}
                f1="SHOW"
                f2="ACTIVE"
              />
            </div>
            <div className={style.projectheaderdottedborde}></div>

            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p style={{ color: "#595959" }}>Project</p> */}
              <Dropdownheader
                defaultvalue="Tag"
                border={true}
                showactive={true}
                input={true}
                dropdownplaceholder="Find member or group"
                users="USERS"
                dropdowntextfieldstyle={style.textfieldstyle}
                dropdowntextfieldinputstyle={style.textfieldinputstyle}
                checkboxselectgroups={true}
                GROUPS="GROUPS"
                selectoptionusers={selectusers}
                selectoptionteams={selctteams}
                f1="SHOW"
                f2="ACTIVE"
              />
            </div>
            <div className={style.projectheaderdottedborde}></div>

            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <p style={{ color: "#595959" }}>status</p> */}
              <Dropdownheader defaultvalue="Status" />
            </div>
            <div className={style.projectheaderdottedborde}></div>
          </div>
          {/* left part end */}
          {/* <div style={{ width: "70%" }}> */}
          <div className={style.projectheaderright}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "2em",
                width: "20%",
              }}
            >
              <Dropdownheader defaultvalue="Description" />
            </div>
            <div className={style.projectheaderbuttonoutside}>
              <button
                style={{
                  width: "8em",
                  height: "70%",
                  color: "#fff",
                  fontSize: "17px",
                  backgroundColor: "#03a9f4",
                  border: "1px solid #03a9f4",
                  borderRadius: "3px",
                }}
              >
                Apply Filter
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
     
    
  );
};

export default ReportsSubheader;
