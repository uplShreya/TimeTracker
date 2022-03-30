import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import TextFieldInput from "../../common/formFields/TextFieldInput";
import style from "../../components/projects/Project.module.css";

function ProjectHeader() {
  return (
    <div style={{ padding: "2em" }}>
      <div
        style={{ fontSize: "25px", fontFamily: "sans-serif", height: "4em" }}
      >
        <p>Projects</p>
      </div>
      <div style={{ width: "109%" }}>
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
              <div>
                <p style={{ color: "#595959" }}>Active</p>
              </div>
              <div
                style={{
                  borderRight: "1px dotted gray",
                  marginTop: "5px",
                  height: "3em",
                }}
              ></div>
              <div>
                <p style={{ color: "#595959" }}>Client</p>
              </div>
              <div
                style={{
                  borderRight: "1px dotted gray",
                  marginTop: "5px",
                  height: "3em",
                }}
              ></div>
              <div>
                <p style={{ color: "#595959" }}>Access</p>
              </div>
              <div
                style={{
                  borderRight: "1px dotted gray",
                  marginTop: "5px",
                  height: "3em",
                }}
              ></div>
              <div>
                <p style={{ color: "#595959" }}>Billing</p>
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
