import React from 'react'
import Chart from "./chart"
import DataChart from "./dataChart"
const ChartContainer = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-7'>
        <Chart/>
        </div>
        <div className='col-span-5'>
        <DataChart/>
        </div>
    </div>
  )
}

export default ChartContainer