import React from 'react'
import Header from '../ohters/Header'
import TaskListNumber from '../ohters/TaskListNumber'
import TaskList from '../Task/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'> 
      <h1>{data.id}</h1>
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
