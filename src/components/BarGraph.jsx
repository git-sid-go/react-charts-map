import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer
  } from "recharts";

const BarGraph = ({data}) => {
    return <ResponsiveContainer width={'100%'} height={400}>
            <BarChart
                data={data}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
                }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Bar barSize={10} dataKey="red" fill="#D2001A" />
                <Bar barSize={10} dataKey="green" fill="#42855B" />
                <Bar barSize={10} dataKey="yellow" fill="#6FEDD6" />
                <Bar barSize={10} dataKey="blue" fill="#FFDE00" />
                <Bar barSize={10} dataKey="black" fill="#E94560" />
            </BarChart>
        </ResponsiveContainer>
}


export default BarGraph;