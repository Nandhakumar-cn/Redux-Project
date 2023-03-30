import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const {taskList}=useSelector((state)=>state.tasks)
    console.log(taskList);
  return (
    <>
<h1 className='text-center my-4 text-primary'>React-Redux-Project</h1>
<p className='text-center lead'>{`  Currently ${taskList.length} task(s) pending`} </p>

</>
  )
}

export default Navbar