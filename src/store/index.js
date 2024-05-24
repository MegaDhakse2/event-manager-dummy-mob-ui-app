import { configureStore } from "@reduxjs/toolkit";
import eventReducers from "./event";
import assigneesReducers from "./assignees";

const appStore = configureStore({
    reducer:{
        event: eventReducers,
        assignees : assigneesReducers
    }
})

export default appStore;