import React from 'react'

const CreateTask = () => {
  return (
    <div className='mx-auto max-w-7xl'>
        <form className='flex w-full gap-10 rounded-2xl bg-slate-900/80 mt-10 p-10 shadow-2xl ring-1 ring-slate-700'>
          
          <div className='flex flex-col gap-6 flex-1'>
            <div>
              <h2 className='text-2xl font-bold text-slate-100'>Create New Task</h2>
              <p className='mt-1 text-sm text-slate-400'>Add task details below</p>
            </div>
            
            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold text-slate-300'>Task Title</h3>
              <input 
                type="text" 
                placeholder='Enter Task Title'
                className='rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-slate-100 placeholder:text-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold text-slate-300'>Date</h3>
              <input 
                type="date"
                className='rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-slate-100 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold text-slate-300'>Assign To</h3>
              <input 
                type="text" 
                placeholder='Employee ID or Name'
                className='rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-slate-100 placeholder:text-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-semibold text-slate-300'>Category</h3>
              <input 
                type="text" 
                placeholder='Dev or Design'
                className='rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-slate-100 placeholder:text-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40'
              />
            </div>
          </div>

          <div className='flex flex-col gap-4 flex-1'>
            <div className='flex flex-col gap-2 flex-1'>
              <h4 className='text-sm font-semibold text-slate-300'>Task Description</h4>
              <textarea 
                placeholder='Enter Task Description' 
                rows="10"
                className='flex-1 resize-none rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-slate-100 placeholder:text-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40'
              />
            </div>
            
            <button 
              type='submit'
              className='rounded-lg bg-emerald-500 px-6 py-3 font-bold text-slate-900 shadow-lg transition hover:bg-emerald-400 hover:shadow-emerald-500/50 active:scale-95'
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
