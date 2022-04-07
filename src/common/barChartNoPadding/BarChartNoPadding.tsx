import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector, LabelList } from "recharts";
import styles from '../../container/dashboard/dashboard.module.css'
const BarChartNoPadding = (props: any) => {
    const data = [
        {
            name: "Page A",
            uv: 20,
            pv: 5,
            amt: 22,
            jv: 5,
            dur: 18,
            man: 25,
            uvx: 10
        },
        // {
        //     name: "Page B",
        //     pv: 5,
        // },
        // {
        //     name: "Page C",
        //     amt: 22,
        // },
        // {
        //     name: "Page D",
        //     jv: 5,
        // },
        // {
        //     name: "Page E",
        //     dur: 18,
        // },
        // {
        //     name: "Page F",
        //     man: 25,
        // },
        // {
        //     name: "Page G",
        //     uvx: 10
        // },

    ];
    return (
        <div>
            <BarChart
                width={350}
                height={40}
                data={data}
                layout="vertical"
                margin={{ top: 0, right: 0, left: 0, bottom: 8 }}
                barCategoryGap="0%"
                barGap="20"

            >
                <XAxis type="number" hide={true} />
                <YAxis type="category" dataKey="name"  />
                <Tooltip position={{ x: 350, y: -20 }}/>
                {props.data1 && <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />}
                
                {props.data2 && <Bar dataKey="amt" fill="#82ca9d" background={{ fill: "#eee" }} />}

                {props.data3 && <Bar dataKey="uv" fill="#ffc658" background={{ fill: "#eee" }} />}

                {props.data4 && <Bar dataKey="jv" fill="#307D7E" background={{ fill: "#eee" }} />}

                {props.data5 && <Bar dataKey="dur" fill="#CB6D51" background={{ fill: "#eee" }} />}

                {props.data6 && <Bar dataKey="man" fill="#7F4E52" background={{ fill: "#eee" }} />}

                {props.data7 && <Bar dataKey="uvx" fill="#FF0000" background={{ fill: "#eee" }} />}

            </BarChart>

        </div>
    )
}

export default BarChartNoPadding