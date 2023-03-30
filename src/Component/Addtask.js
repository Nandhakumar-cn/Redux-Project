import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTaskList } from '../slice/Taskslice';
import { useDispatch } from 'react-redux';
function Addtask() {
    const [title,setTitle] = React.useState('')
    const [description,setDescription] = React.useState('')
    const dispatch=useDispatch()
const addtask=(e)=>{
e.preventDefault();
console.log({title,description});
dispatch(addTaskList({title, description}))
setTitle("")
setDescription("")
}
  return (
    <section className='my-5'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task Title</Form.Label>
      <Form.Control type="text" placeholder="Enter your task Title"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
     </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Task Description</Form.Label>
      <Form.Control type="text" placeholder="Enter your task Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    </Form.Group>
    
    <Button variant="primary" type="submit" onClick={(e)=>addtask(e)}>
      Add Task
    </Button>
  </Form>
  </section>
  )
}

export default Addtask