 import {combineReducers} from "redux"
 import todoReducer from './todoReducer';
import { configureStore } from "@reduxjs/toolkit";

 const rootReducer = combineReducers({todo:todoReducer});

 const store = configureStore({reducer:rootReducer})

 export type rootStateType = ReturnType<typeof rootReducer>;

 export default store;