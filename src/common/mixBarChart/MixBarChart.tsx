import React, { useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from '../UiComponents/ui.module.css'
// import { Hooks } from '../hooks/hooks';
const MixBarChart = () => {
    // const { open } = Hooks();
    // useEffect(() => {
    //     console.log(open)
    // }, [open])

    const data = [
        { name: "Moon, Mar 28", uv: 200, pv: 140, amt: 24, jv: 5, dur: 18, man: 25, uvx: 10 },
        { name: "Moon, Mar 29", uv: 30, pv: 13, amt: 22, jv: 5, dur: 18, man: 25, uvx: 10 },
        { name: "Moon, Mar 30", uv: 20, pv: 98, amt: 22, jv: 5, dur: 18, man: 25, uvx: 10 },
        { name: "Moon, Mar 31", uv: 27, pv: 39, amt: 20, jv: 5, dur: 18, man: 25, uvx: 10 },
        { name: "Moon, Mar 32", uv: 18, pv: 48, amt: 21, jv: 5, dur: 18, man: 25, uvx: 10 },
        { name: "Moon, Mar 33", uv: 23, pv: 38, amt: 25, jv: 5, dur: 18, man: 25, uvx: 10 },
        { name: "Moon, Mar 34", uv: 34, pv: 43, amt: 21, jv: 5, dur: 18, man: 25, uvx: 10 }
    ];

    // const [open,setOpen]=React.useState(false)
    // const click =()=>{
    //     setOpen(!open)
    // }

    return (
        <div className={styles.deff} style={{ width: "99%", height: 400}}>
           <ResponsiveContainer>
            <BarChart
                // onClick={click}
                // width={open ? 900 : 1100}
                width={1050}
                height={390}
                data={data}
                margin={{ top: 30, right: 15, left: 15, bottom: 30 }}>
                <CartesianGrid strokeDasharray="1" vertical={false} />
                <XAxis dataKey="name" tickCount={0} />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                <Bar dataKey="uv" stackId="a" fill="#ffc658" />
                <Bar dataKey="jv" stackId="a" fill="#307D7E" />
                <Bar dataKey="dur" stackId="a" fill="#CB6D51" />
                <Bar dataKey="man" stackId="a" fill="#7F4E52" />
                <Bar dataKey="uvx" stackId="a" fill="#FF0000" />
            </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MixBarChart