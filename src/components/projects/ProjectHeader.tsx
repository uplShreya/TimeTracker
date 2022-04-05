import { ContactsOutlined } from "@material-ui/icons";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import TextFieldInput from "../../common/formFields/TextFieldInput";
import Dropdownheader from "../../common/uiComponents/Dropdownheader";
import style from "../../components/projects/Project.module.css";

function ProjectHeader() {
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
    <div>
      <div
        style={{
          fontSize: "25px",
          fontFamily: "sans-serif",
          height: "3em",
          color: "#666",
        }}
      >
        <p>Projects</p>
      </div>
      <div style={{ width: "100%" }}>
        <div>
          <div className={style.projectheaderleftright}>
            <div className={style.projectheaderleft}>
              <div
                style={{ display: "flex", width: "10%", alignItems: "center" }}
              >
                <p
                  style={{
                    color: "#8a8a8a",
                    letterSpacing: "1.1px",
                    fontSize: "14px",
                  }}
                >
                  FILTER
                </p>
              </div>
              <div
                style={{
                  borderRight: "1px dotted gray",
                  marginTop: "5px",
                  height: "3em",
                }}
              ></div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <p style={{ color: "#595959" }}>Active</p> */}
                <Dropdownheader
                  defaultvalue="Active"
                  // value1="Active"
                  value2="Archived"
                  value3="All"
                />
              </div>
              <div
                style={{
                  borderRight: "1px dotted gray",
                  marginTop: "5px",
                  height: "3em",
                }}
              ></div>
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

              <div
                style={{
                  borderRight: "1px dotted gray",
                  marginTop: "5px",
                  height: "3em",
                }}
              ></div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <p style={{ color: "#595959" }}>Access</p> */}
                <Dropdownheader
                  defaultvalue="Access"
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
              <div
                style={{
                  borderRight: "1px dotted gray",
                  marginTop: "5px",
                  height: "3em",
                }}
              ></div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <p style={{ color: "#595959" }}>Billing</p> */}
                <Dropdownheader defaultvalue="Billing" />
              </div>
              <div
                style={{
                  borderRight: "1px dotted gray",
                  marginTop: "5px",
                  height: "3em",
                }}
              ></div>
            </div>
            {/* left part end */}
            {/* <div style={{ width: "70%" }}> */}
            <div className={style.projectheaderright}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "20px",
                }}
              >
                <Image src="/image/search.svg" height={55} width={20} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextFieldInput
                  type="search"
                  placeholder="Project name"
                  textnewclass={style.input}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  style={{
                    width: "9em",
                    height: "70%",
                    color: "#fff",
                    backgroundColor: "#03a9f4",
                    border: "1px solid #03a9f4",
                  }}
                >
                  Apply Filter
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
