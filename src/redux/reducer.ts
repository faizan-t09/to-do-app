import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import { configureStore } from "@reduxjs/toolkit";

import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";
const saga = createSagaMiddleware();
const rootReducer = combineReducers({ todo: todoReducer });

const store = configureStore({ reducer: rootReducer, middleware: [saga] });

saga.run(rootSaga)

export type rootStateType = ReturnType<typeof rootReducer>;

export default store;
