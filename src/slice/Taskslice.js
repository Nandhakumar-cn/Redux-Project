import { createSlice } from "@reduxjs/toolkit";

const initialState={
    taskList:[],
    selectedTask:{}
}
const taskSlice=createSlice({
    name:"taskSlice",
    type:"taskSlice",
    initialState,
    reducers:{
        addTaskList:(state,action)=>{
 
            state.taskList.push(action.payload)
            
            
        },
        removetaskList:(state,action)=>{
            state.taskList = state.taskList.filter((task)=>task.title !== action.payload.title )
          
        },
        updateTaskList:(state,action)=>{
            state.taskList=state.taskList.map((tasks)=>tasks.id === action.payload.id ? action.payload : tasks)
        },
        selectedTask:(state,action)=>{  
            state.selectedTask=action.payload   
        }
    }

})
export const {addTaskList,removetaskList,updateTaskList,selectedTask}=taskSlice.actions
export default taskSlice.reducer