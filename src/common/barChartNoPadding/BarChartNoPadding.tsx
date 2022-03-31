import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from "recharts";

const BarChartNoPadding = () => {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
            jv: 500,
            dur: 1800,
            man: 2500,
            uvx: 1000
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
            jv: 500,
            dur: 1800,
            man: 2500,
            uvx: 1000
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
            jv: 500,
            dur: 1800,
            man: 2500,
            uvx: 1000
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
            jv: 500,
            dur: 1800,
            man: 2500,
            uvx: 1000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
            jv: 500,
            dur: 1800,
            man: 2500,
            uvx: 1000
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
            jv: 500,
            dur: 1800,
            man: 2500,
            uvx: 1000
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
            jv: 500,
            dur: 1800,
            man: 2500,
            uvx: 1000
        }
    ];
    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                barSize={20}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
        </div>
    )
}

export default BarChartNoPadding