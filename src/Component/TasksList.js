import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./UpdateTask"
import { useSelector } from 'react-redux'
import { selectedTask,removetaskList } from '../slice/Taskslice';
import { useDispatch } from 'react-redux';
function TasksList() {
    const dispatch=useDispatch()
    const {taskList}=useSelector((state)=>state.tasks)
    
    const [modalShow,setModalShow] = React.useState(false)
    const updatetask=(task)=>{
        console.log("uptaded");
        setModalShow(true);
        dispatch(selectedTask(task))
    }
    const deletetask=(task)=>{
        console.log("deleted");
        dispatch(removetaskList(task))
    }
  return (
    <>
    <Table striped bordered hover>
    <thead>
      <tr className='text-center'>
        <th>No</th>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {
            taskList && taskList.map((task,index)=>{
                return(
<tr className='text-center' key={task.id}>
        <td>{index+1}</td>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td> <Button variant="warning" className='mx-3' onClick={()=>updatetask(task)}><i className="bi bi-pencil-square"></i> </Button>
       
        <Button variant="danger" onClick={()=>deletetask(task)}><i className="bi bi-trash3-fill"></i></Button></td>
      </tr>
   
                )
            })
        }
      
     
    </tbody>
  </Table>
    <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
  </>
  )
}

export default TasksList