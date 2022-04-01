import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from "recharts";
import styles from '../../container/dashboard/dashboard.module.css'

const BarchartNewI = () => {
    const data = [
        {
            name: "Page A",
            uv: 20,
            pv: 98,
            amt: 22,
            jv: 5,
            dur: 18,
            man: 25,
            uvx: 10
        }
    ];
    return (
        <div>
            <BarChart
                // className={styles.textbar}
                width={460}
                height={100}
                data={data}
                layout="vertical"
                margin={{ top: 10, right: 35, left: 20, bottom: 5 }}
            >
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip 
                // labelFormatter={}
               
                />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" background={{ fill: "#eee" }}/>
                <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                <Bar dataKey="uv" stackId="a" fill="#ffc658" />
                <Bar dataKey="jv" stackId="a" fill="#307D7E" />
                <Bar dataKey="dur" stackId="a" fill="#CB6D51" />
                <Bar dataKey="man" stackId="a" fill="#7F4E52" />
                <Bar dataKey="uvx" stackId="a" fill="#FF0000" />
            </BarChart>
        </div>
    )
}

export default BarchartNewI