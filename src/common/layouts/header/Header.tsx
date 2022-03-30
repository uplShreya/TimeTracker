import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            width: "22em",
            justifyContent: "space-between",
            float: "right",
          }}
        >
          <div>
            <p style={{ color: "red" }}>Header</p>
          </div>
          <div>
            <p style={{ color: "red" }}>Header</p>
          </div>
          <div>
            <p style={{ color: "red" }}>Header</p>
          </div>
          <div>
            <p style={{ color: "red" }}>Header</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
