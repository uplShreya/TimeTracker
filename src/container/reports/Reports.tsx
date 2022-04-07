import React from "react";
import ReportsComponent from "../../components/reports/Reports";
import ReportsSubheader from "../../components/reports/reportsSubheader/ReportsSubheader";

const ReportsContainer = () => {
  return (
    <div>
      <div>
        <ReportsComponent />
      </div>
      <div>
        <ReportsSubheader />
      </div>
    </div>
  );
};

export default ReportsContainer;
