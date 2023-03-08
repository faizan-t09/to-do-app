import { createSlice } from "@reduxjs/toolkit";

import { taskType } from "../interfaces/TaskInterface";

const initialTodos: taskType[] = [
  {
    id: 1,
    title: "Work on todo",
    body: "add functionality",
    due: "2022-10-08",
    done: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodos,
  reducers: {
    fetchTodos:()=>{},
    initialize:(state,action)=>{
      return [...action.payload]
    },
    markTaskDone: (state, action) => {
      state.map((task) => {
        if (task.id === action.payload.id) {
          task.done = true;
        }
        return task;
      });
    },
    unmarkTaskDone: (state, action) => {
      state.map((task) => {
        if (task.id === action.payload.id) {
          task.done = false;
        }
        return task;
      });
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      state.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.body = action.payload.body;
          task.due = action.payload.due;
        }
        return task;
      });
    },
    addTask: (state, action) => {
      return [...state, action.payload]
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer