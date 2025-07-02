import Navbar from '@/components/Navbar'
import React from 'react'

const RootLayout = ({children}) => {
  return (
    <div className='bg-[#FCFBFA] pattern min-h-screen'>
      <nav>
        <Navbar />
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
