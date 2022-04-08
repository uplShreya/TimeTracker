import { style } from "@mui/system";
import React from "react";
import Dropdownheader from "../../../common/UiComponents/Dropdownheader";
import styles from "../../reports/reportsDetailed/ReportsDetailed.module.css";

function ReportsDetailedTimeAudit() {
  return (
    <div className={styles.reportdetailauditoverall}>
      <Dropdownheader defaultvalue="Audit" />
      <div className={styles.reportdetaileddottedborder}></div>
      <div className={styles.reportsDetailedshowingtext}>
        <p>Showing all time entries</p>
      </div>
    </div>
  );
}

export default ReportsDetailedTimeAudit;
