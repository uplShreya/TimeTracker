import Image from "next/image";
import React from "react";
import style from "../../components/projects/Project.module.css";

function ProjectHeader() {
  return (
    <div style={{ padding: "1em" }}>
      <div style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
        <p>Projects</p>
      </div>
      <div className={style.projectheaderleftright}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
          <div
            style={{
              display: "flex",
              width: "70%",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* <p>hi</p> */}
              <Image src="/image/search.svg" height={55} width={20} />
            </div>
            <div>
              <p>hi</p>
            </div>
            <div>
              <p>hi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
