import React from 'react'
import Logo from '../../utils/constants'

const BrandLogo = () => {
  return (
    <div className='md:block flex  justify-center'> 
      <img className='h-56 w-56 md:pb-28 pb-20' src={Logo}/>
    </div>
  )
}

export default BrandLogo