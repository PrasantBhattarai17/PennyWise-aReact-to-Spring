import React from 'react'
import Chart from "./chart"
import DataChart from "./dataChart"
const ChartContainer = () => {
  return (
    <div className='flex flex-col  md:grid md:grid-cols-12'>
        <div className='md:col-span-7  w-[100%]'>
        <Chart/>
        </div>
        <div className='md:col-span-5 flex justify-center'>
        <DataChart/>
        </div>
    </div>
  )
}

export default ChartContainer