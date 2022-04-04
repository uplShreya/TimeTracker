import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from "recharts";
import styles from '../../container/dashboard/dashboard.module.css'
const BarChartNoPadding = () => {
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
                // className={styles.textbar}
                width={500}
                height={330}
                data={data}
                layout="vertical"
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                barCategoryGap="0%"
                barGap="20"
            >
                <XAxis type="number" hide={true} />
                <YAxis type="category" dataKey="name" hide={true}/>
                <Tooltip
                // labelFormatter={}

                />
                <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
                <Bar dataKey="amt" fill="#82ca9d" background={{ fill: "#eee" }} />
                <Bar dataKey="uv" fill="#ffc658" background={{ fill: "#eee" }} />
                <Bar dataKey="jv" fill="#307D7E" background={{ fill: "#eee" }} />
                <Bar dataKey="dur" fill="#CB6D51" background={{ fill: "#eee" }} />
                <Bar dataKey="man" fill="#7F4E52" background={{ fill: "#eee" }} />
                <Bar dataKey="uvx" fill="#FF0000" background={{ fill: "#eee" }} />
            </BarChart>

        </div>
    )
}

export default BarChartNoPadding