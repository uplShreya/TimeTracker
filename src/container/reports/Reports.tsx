import React from "react";
import ReportsComponent from "../../components/reports/Reports";
import ReportsSubheader from "../../components/reports/reportsSubheader/ReportsSubheader";
import ReportsSummary from "../../components/reports/reportsSummary/ReportsSummary";

const ReportsContainer = () => {
  return (
    <div>
      <div>
        <ReportsComponent />
      </div>
      <div>{/* <ReportsSummary /> */}</div>
    </div>
  );
};

export default ReportsContainer;
