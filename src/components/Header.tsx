import React from 'react'
import NavigationBar from './NavigationBar'

const Header = () => {
  return (
    <div className='fixed z-40 w-full bg-white'>
      <NavigationBar />
    </div>
  )
}

export default Header