import React from 'react'

const AllTask = () => {
  return (
    // <div className='mt-10 space-y-4'>
    //   <h2 className='text-2xl font-bold text-slate-100'>All Tasks</h2>
      
    //   <div className='space-y-3 max-h-96 overflow-y-auto'>
    //     <div className='flex items-start gap-4 rounded-lg bg-slate-800/80 p-4 ring-1 ring-slate-700 hover:bg-slate-800 transition'>
    //       <div className='flex-1'>
    //         <h3 className='font-semibold text-slate-100'>Vikash Sharma</h3>
    //         <p className='text-sm text-slate-400 mt-1'>Make a UI Design</p>
    //       </div>
    //       <span className='px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold whitespace-nowrap'>Active</span>
    //     </div>

    //     <div className='flex items-start gap-4 rounded-lg bg-slate-800/80 p-4 ring-1 ring-slate-700 hover:bg-slate-800 transition'>
    //       <div className='flex-1'>
    //         <h3 className='font-semibold text-slate-100'>Priya Singh</h3>
    //         <p className='text-sm text-slate-400 mt-1'>Design Landing Page</p>
    //       </div>
    //       <span className='px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold whitespace-nowrap'>Pending</span>
    //     </div>

    //     <div className='flex items-start gap-4 rounded-lg bg-slate-800/80 p-4 ring-1 ring-slate-700 hover:bg-slate-800 transition'>
    //       <div className='flex-1'>
    //         <h3 className='font-semibold text-slate-100'>Rahul Kumar</h3>
    //         <p className='text-sm text-slate-400 mt-1'>Backend API Integration</p>
    //       </div>
    //       <span className='px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold whitespace-nowrap'>Completed</span>
    //     </div>
    //   </div>
    // </div>
    <div className='p-5 bg-[#1C1C1C] mt-5 rounded h-48 overflow-auto'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Vikash Sharma</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Vikash Sharma</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-green-400  mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Vikash Sharma</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Vikash Sharma</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
    </div>
  )
}

export default AllTask
