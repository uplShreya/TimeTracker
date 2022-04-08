import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ReportsBarChart = () => {

    const data = [
        { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
        { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
        { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
        { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
    ];
    return (
        <div style={{ width: "99%", height: 350 }}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    barSize={100} 
                    >
                    <XAxis dataKey="name" scale="point" padding={{ left: 90, right: 90 }} />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <CartesianGrid strokeDasharray="1" vertical={false} />
                    <Bar dataKey="pv" fill="#8BC34A" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ReportsBarChart