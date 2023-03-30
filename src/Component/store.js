import { configureStore } from "@reduxjs/toolkit";
import taskreducer from "../slice/Taskslice"

export const store=configureStore({
reducer:{
    tasks:taskreducer
}
})