import Sidebar from '@/components/Sidebar'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex h-screen'>
      <aside className='fixed z-50'>
        <Sidebar />
      </aside>
        <div className='flex-1 ml-64'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout
