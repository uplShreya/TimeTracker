import Image from 'next/image'
import React from 'react'
import CommonButton from '../../common/UiComponent/commonButton/commonButton'
import CommonDate from '../../common/UiComponent/commonDatetime/commonDatetime'
import CommonDropdown from '../../common/UiComponent/commonDropdown/commonDropdown'
import styles from '../../container/dashboard/dashboard.module.css'
import PushPinIcon from '@mui/icons-material/PushPin';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import { AxisModel, Category, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, StackingBarSeries} from'@syncfusion/ej2-react-charts';


const DashBoard = () => {
    // class App extends React.Component<{}, {}> {
    //     public primaryXAxis: AxisModel = { valueType: 'Category'};
    //     public data1 : any[]=  [
    //       { x: '2014', y: 111.1 },
    //       { x: '2015', y: 127.3 },
    //       { x: '2016', y: 143.4 },
    //       { x: '2017', y: 159.9 }];
    //     public data2 : any[]= [
    //       { x: '2014', y: 76.9 },
    //       { x: '2015', y: 99.5 },
    //       { x: '2016', y: 121.7 },
    //       { x: '2017', y: 142.5 }];
          
    return (
        <>
            <div className={styles.dashboard}>
                <div className={styles.dashboard_main}>
                    <div className={styles.dashboard_text}>
                        <p>Dashboard</p>
                    </div>
                    <div className={styles.dropdown_Date_Button}>
                        <div className={styles.dropdown_BillabilityProject}>
                            <CommonDropdown
                                dropdown={true}
                                firstName='Project'
                                firstvalue='Project'
                                secoundNmae='Billability'
                                secoundvalue='Billability'
                            // <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />          
                            />
                        </div>
                        <div className={styles.dropdown_OnlymeTeam}>
                            <CommonDropdown
                                dropdown={true}
                                firstName='Teame'
                                firstvalue='Teame'
                                secoundNmae='Only me'
                                secoundvalue='Only me'
                            />
                        </div>
                        <div className={styles.Date_button}>
                            <div className={styles.Date}>
                                <CommonDate
                                    // Date={true}
                                    // firstName='Teame'
                                    // firstvalue='Teame'
                                    // secoundNmae='Only me'
                                    // secoundvalue='Only me'
                                    date2={true}
                                />
                            </div>
                            <div className={styles.button_ArrowBackward}>
                                <CommonButton
                                    button2={true}
                                    ArrowBackward={true}
                                />
                            </div>
                            <div className={styles.button_ArrowForward}>
                                <CommonButton
                                    button2={true}
                                    arrowForward={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboard_pi_component_first}>
                    <div className={styles.dashboard_first_component}>
                        <div className={styles.dashboard_first_component_first_totaltime}><p>Total time</p><h1>482:25:05</h1></div>
                        <div className={styles.dashboard_first_component_first_topproject}><p>Top project</p><h1>PictPlay</h1></div>
                        <div className={styles.dashboard_first_component_first_topclient}><p>Top client</p><h1>Steve Dollens</h1></div>
                    </div>
                    <div className={styles.dashboard_secound_component_first}></div>
                    <div className={styles.dashboard_third_component_first}></div>
                </div>

                <div className={styles.dashboard_pi_component_secound}>
                    <div className={styles.dashboard_first_component_secound}>
                        <div className={styles.dashboard_first_component_secound_teamactivites}>Team activities</div>
                        <div className={styles.dashboard_first_component_secound_icon}><PushPinIcon /></div>
                    </div>
                    <div className={styles.dashboard_secound_component_secound}>
                        <div className={styles.dashboard_first_component_first_TEAMMEMBER}><p>TEAM MEMBER</p></div>
                        <div className={styles.dashboard_first_component_first_LATESTACTIVITY}><p>LATEST ACTIVITY</p></div>
                        <div className={styles.dashboard_first_component_first_TOTALTRACKED}><p>TOTAL TRACKED (THIS WEEK)</p></div>
                    </div>
                    <div className={styles.dashboard_third_component_secound}>
                        <div className={styles.teamMember}>
                            <div className={styles.teamMember_image}>RD</div>
                            <p>Rajdwip Dey</p>

                        </div>
                            <div className={styles.divide}></div>                      
                        <div className={styles.latestActivity}>
                            <div className={styles.latestActivityfirst}>
                                <h1>TimeTracker Design</h1>
                                <h2>
                                    {/* <FiberManualRecordIcon /> */}
                                    <Image src='/image/Orange.png' width={10} height={10} />
                                    <h1>TimeTracker -</h1> <p>Misc (Internal)</p></h2>
                            </div>
                            <div className={styles.timeinprogress}>
                                <div className={styles.timeinprogress1}>00:00:00</div>
                                {/* <RadioButtonCheckedIcon /> */}
                                <Image src='/image/record.png' width={12} height={12} />
                                <div className={styles.timeinprogress2}>In progress</div>
                            </div>

                        </div>
                            <div className={styles.divide}></div>                        
                        <div className={styles.totalTracked}>
                            <div>00:00:00</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard