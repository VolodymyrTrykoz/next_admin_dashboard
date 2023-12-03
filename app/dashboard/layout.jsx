import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import Footer from '../ui/dashboard/footer/footer'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard info',
}

const DashboardLayout = ({children}) => {
  return (
    <div className='flex'>
        <div className='w-1/5 background-soft p-5'><Sidebar/></div>
        <div className='w-4/5 p-5'>
            <Navbar />
            {children}
            <Footer />
        </div>
    </div>
  )
}

export default DashboardLayout
