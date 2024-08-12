import React from 'react'
import NavBar from './NavBar'
import FinanceContainer from './FinanceContainer'
import Sidebar from './Sidebar'

const MainPage = () => {
  return (
<div className='grid grid-cols-12 '>
 <div className='col-span-2 bg-[white] '>
  <Sidebar/>
 </div>
    <div className='col-span-10'>
    <NavBar/>
    <FinanceContainer/>
    </div>
</div>
  )
}

export default MainPage