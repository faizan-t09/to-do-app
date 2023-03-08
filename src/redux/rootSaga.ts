import { call, put, takeLatest } from "redux-saga/effects";

import { todoActions } from "./todoReducer";
import { taskType } from "../interfaces/TaskInterface";

function* fetchTodos(): any {
  try {
    const response = yield call(
      fetch,
      `https://jsonplaceholder.typicode.com/posts`
    );
    const todos = yield response.json();
    yield put(
      todoActions.initialize(
        todos.map((element: taskType) => {
          return { ...element, done: false };
        })
      )
    );
  } catch (err) {
    console.log("Failed to fetch todo");
  }
}

function* rootSaga() {
  yield takeLatest("todo/fetchTodos", fetchTodos);
}

export default rootSaga;
