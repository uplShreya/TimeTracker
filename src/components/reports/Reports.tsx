import React from "react";
import { style, styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import styles from "../../components/reports/Reports.module.css";
import CommonDate from "../../common/UiComponents/commonDatetime/commonDatetime";
import CommonButton from "../../common/UiComponents/commonButton/commonButton";
import styleD from "../../container/dashboard/dashboard.module.css";
import ReportsSubheader from "./reportsSubheader/ReportsSubheader";

const ReportsComponent = () => {
  const blue = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#80BFFF",
    300: "#66B2FF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    800: "#004C99",
    900: "#003A75",
  };

  const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: #4d4a4a;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 200;
    background-color: white;
    // width: 100%;
    padding: 0px 16px 0px 20px;
    // margin: 6px 6px;
    border: 1px solid #80808066;
    border-radius: 1px;
    display: flex;
    align-items: center;

    // justify-content: center;

    &:hover {
      background-color: #80808066;
    }

    &:focus {
      // color: #fff;
      // border-radius: 3px;
      // outline: 2px solid lightgray;
      // outline-offset: 2px;
    }

    &.${tabUnstyledClasses.selected} {
      background-color: lightgray;
      color: black;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;

  const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    height: 42px;
    // background-color: white;
    border-radius: 8px;
    margin-bottom: 50px;
    display: flex;
    // align-items: center;
    // justify-content: center;
    // align-content: space-between;
  `;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <TabsUnstyled defaultValue={1}>
            <TabsList>
              <div className={styles.reporttext}>
                <p>REPORTS</p>
              </div>

              <Tab>Summary</Tab>
              <Tab>Detailed</Tab>
              <Tab>Weekly</Tab>
              <Tab>Shared</Tab>
            </TabsList>

            <TabPanel value={1}>Summary</TabPanel>
            <TabPanel value={2}>Second content</TabPanel>
            <TabPanel value={3}>Third content</TabPanel>
            <TabPanel value={4}>Fourth Content</TabPanel>
          </TabsUnstyled>
        </div>

        <div>
          <div className={styleD.Date_button_flex}>
            <div className={styleD.Date}>
              <CommonDate date2={true} />
            </div>
            <div className={styleD.button_ArrowBackward}>
              <CommonButton button2={true} ArrowBackward={true} />
            </div>
            <div className={styleD.button_ArrowForward}>
              <CommonButton button2={true} arrowForward={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsComponent;
