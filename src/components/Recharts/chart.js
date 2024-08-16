import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
const Chart = () => {
  const Bardata = [
    { month: 'Jan', income: 5000, expenses: 3000 },
    { month: 'Feb', income: 4500, expenses: 3200 },
    { month: 'Mar', income: 4800, expenses: 3100 },
    { month: 'Apr', income: 5200, expenses: 3300 },
    { month: 'May', income: 5400, expenses: 3500 },
    { month: 'Jun', income: 5000, expenses: 3400 },
    { month: 'Jul', income: 5300, expenses: 3600 },
    { month: 'Aug', income: 5100, expenses: 3400 },
    { month: 'Sept', income: 5500, expenses: 3700 },
    { month: 'Oct', income: 5600, expenses: 3800 },
    { month: 'Nov', income: 6000, expenses: 3900 },
    { month: 'Dec', income: 6200, expenses: 4000 }
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={Bardata}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="blueviolet" />
        <Bar dataKey="expenses" fill="#7F00FF   " />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart