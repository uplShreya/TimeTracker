import Image from 'next/image'
import React from 'react'
import PieChart1 from '../../../common/pieChart/PieChart'
import ReportsBarChart from '../../../common/reportsCharts/ReportsBarChart'
import SwitchLabelPlacement from '../../../common/SwitchLabelPlacement/switchLabelPlacement'
import CommonDropdown from '../../../common/UiComponents/commonDropdown/commonDropdown'
import ReportsSubheader from '../reportsSubheader/ReportsSubheader'
import Styles from './ReportsSummary.module.css'

const ReportsSummary = () => {
  return (
    <>
      <ReportsSubheader />
      <div className={Styles.ReportsSummary_main}>
        <div className={Styles.ReportsSummary_main_first}>
          <div className={Styles.ReportsSummary_Time}>
            <p>Total:</p>
            <h1>543:07:20</h1>
          </div>
          <div className={Styles.ReportsSummary_Dropdown_Print_Share_Switch}>
            <div className={Styles.ReportsSummary_Dropdown_Print_Share_Switch_first}>
              <CommonDropdown
                dropdown={true}
                firstName="Save as PDF"
                secoundNmae="Save as CSV"
                secoundvalue="Save as CSV"
                ThirdNmae="Save as Excel"
                thirdvalue="Save as Excel"
                fourthNmae="Customize..."
                fourthvalue="Customize..."
              />
            </div>
            <div className={Styles.ReportsSummary_Dropdown_Print_Share_Switch_secound}>
              <Image src="/image/dollar.png" height={40} width={40} />
            </div>
            <div className={Styles.ReportsSummary_Dropdown_Print_Share_Switch_third}>
              <Image src="/image/dollar.png" height={40} width={40} />
            </div>
            <div className={Styles.ReportsSummary_Dropdown_Print_Share_Switch_fourth}>
              <SwitchLabelPlacement Switch_end={true} label="Rounding" value="Rounding" disabled />
            </div>
          </div>
        </div>
        <div className={Styles.ReportsBarChart}>
          <ReportsBarChart />
        </div>
      </div>

      <div className={Styles.Groupby_main}>
        <div className={Styles.Groupby_main_header}>
          <p>Group by:</p>
          <div className={Styles.Groupby_Dropdown}>
            <CommonDropdown
              dropdown={true}
              dropdownclass={Styles.dropDown}
              firstName="Project"
              secoundNmae="Client"
              secoundvalue="Client"
              ThirdNmae="User"
              thirdvalue="User"
              fourthNmae="Group"
              fourthvalue="Group"
              fifthNmae="Tag"
              fifthvalue="Tag"
              sixthNmae="Month"
              sixthvalue="Month"
              seventhNmae="Week"
              seventhvalue="Week"
              eighthName="Date"
              eighthvalue="Date"
            />
          </div>
          <div className={Styles.Groupby_Dropdown}>
            <CommonDropdown
              dropdown={true}
              dropdownclass={Styles.dropDown}
              firstName="(None)"
              secoundNmae="Project"
              secoundvalue="Project"
              ThirdNmae="Task"
              thirdvalue="Task"
              fourthNmae="Client"
              fourthvalue="Client"
              fifthNmae="User"
              fifthvalue="User"
              sixthNmae="Group"
              sixthvalue="Group"
              seventhNmae="Tag"
              seventhvalue="Tag"
              eighthName="Description"
              eighthvalue="Description"
            />
          </div>
        </div>
        <div className={Styles.Groupby_main_body}>
          <div className={Styles.Groupby_main_body_first}>
            <div className={Styles.Groupby_main_body_first_TITLE}>
              <div className={Styles.Groupby_main_body_first_TITLE_first}>
                <p>TITLE</p>
                <div><Image src="/image/sort.png" alt="" height={12} width={12} /></div>
              </div>
              <div className={Styles.Groupby_main_body_first_TITLE_secound}>
                <p>DURATION</p>
                <div><Image src="/image/sort.png" alt="" height={12} width={12} /></div>
              </div>
            </div>
            <div className={Styles.Groupby_main_body_first_details}>
              <div>65</div>
              <h1></h1>
              <h3> PictPlay -<p>Steve Dollens</p></h3>
            </div>
          </div>
          <div className={Styles.Groupby_main_body_secound}>
            <PieChart1 />
          </div>
        </div>
      </div>
    </>
  )
}

export default ReportsSummary