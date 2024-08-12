import React from 'react'
import Logo from "../utils/pw.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faCreditCard, faDollar, faEuro, faGear, faMoneyBill, faMoneyBillTransfer, faMoneyCheckDollar, faPiggyBank, faQuestion, faSignOut} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const ree='red';
  return (
    <div className='flex flex-col space-y-32 border-r-2 shadow-md '>
      <div>
    <div className=' flex h-20 border-b-2 mb-6'>
 <img className=' h-full w-full cursor-pointer' src={Logo} alt='Logo'/>
      </div>
      <div>
  <div>
    <h3 className='font-merriweather text-lg  font-bold my-1 mx-2 p-1'>Menu</h3>
 <ul>
  <li className='font-semibold text-md font-sans my-4 mx-4 p-1  cursor-pointer bg-[blueviolet] rounded-md text-white'><FontAwesomeIcon className='mx-4' icon={faBorderAll}/> Overview</li>
  <li className='font-semibold text-md font-sans my-4 mx-4 p-1 OverallHover'><FontAwesomeIcon className='mx-4 mr-6' icon={faDollar}/>Income</li>
  <li className='font-semibold text-md font-sans my-4 mx-4 p-1 OverallHover'><FontAwesomeIcon className='mx-4' icon={faMoneyCheckDollar}/> Expenses</li>
  <li className='font-semibold text-md font-sans my-4 mx-4 p-1 OverallHover'><FontAwesomeIcon className='mx-4' icon={faPiggyBank}/> Savings</li>
  <li className='font-semibold text-md font-sans my-4 mx-4 p-1 OverallHover'><FontAwesomeIcon className='mx-4' icon={faMoneyBillTransfer}/> Transactions</li>
  <li className='font-semibold text-md font-sans my-4 mx-4 p-1 OverallHover'><FontAwesomeIcon className='mx-4' icon={faCreditCard}/> Billings</li>
 </ul>
  </div>
  <div>
    <h3 className='font-merriweather text-lg  font-bold my-1 mx-2 p-1'>General</h3>
    <ul>
    <li className='font-semibold text-md font-sans my-4 mx-4 p-1 OverallHover'> <FontAwesomeIcon  className='mx-4' icon={faGear}/>settings</li>
  <li className='font-semibold   text-md font-sans my-4 mx-4 p-1 OverallHover'> <FontAwesomeIcon  className='mx-4' icon={faQuestion}/>help</li>
    </ul>
  </div>
      </div>
    </div>
  <div>
   <h3 className='font-semibold text-lg font-merriweather my-4 mx-4 p-1 OverallHover' > <FontAwesomeIcon  className='mx-4' icon={faSignOut}/>logout</h3>
  </div>


    </div>


  )
}

export default Sidebar