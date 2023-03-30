import { createStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";


export const store = createStore(
    rootreducer
)

export default store