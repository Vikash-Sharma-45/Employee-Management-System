import React from 'react'
import Header from '../ohters/Header'
import CreateTask from '../ohters/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='min-h-screen w-full bg-slate-950 p-10'>
      <Header />

      <CreateTask />
    </div>
  )
}

export default AdminDashboard
