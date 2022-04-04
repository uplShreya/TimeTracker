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
  return (
    <div style={{ padding: "2em" }}>
      <div
        style={{ fontSize: "25px", fontFamily: "sans-serif", height: "3em" }}
      >
        <p>Projects</p>
      </div>
      <div style={{ width: "100%" }}>
        <div className={style.projectheaderborder}>
          <div className={style.projectheaderleftright}>
            <div className={style.projectheaderleft}>
              <div>
                <p style={{ color: "#8a8a8a" }}>Filter</p>
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
                  selectoptionusers={selectusers}
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
              <div>
                <Image src="/image/search.svg" height={55} width={20} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextFieldInput
                  type="search"
                  placeholder="Project name"
                  textnewclass={style.input}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button variant="contained">Apply Filter</Button>
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
