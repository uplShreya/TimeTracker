import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from "recharts";
import styles from '../UiComponent/ui.module.css'
const PieChart1 = (props: any) => {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
        { name: "Group E", value: 200 },
        { name: "Group F", value: 200 },
        { name: "Group G", value: 200 },
        { name: "Group H", value: 200 }
    ];
    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#2B547E",
        "#4E9258",
        "#FF0000",
        "#889889"
    ];

    return (
        <div className={styles.pie}>
            <PieChart width={440} height={440}>
                <Pie
                    data={data}
                    cx={150}
                    cy={200}
                    innerRadius={75}
                    outerRadius={150}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}</Pie><Tooltip />
            </PieChart>
        </div>
    )
}

export default PieChart1