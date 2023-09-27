import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { TasksActionType, tasksReducer } from "./reducers/tasksReducer";
import {
  TodolistsActionType,
  todolistsReducer,
} from "./reducers/todolistsReducer";
import thunk from "redux-thunk";
import { ThunkDispatch } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//Types
export type RootState = ReturnType<typeof store.getState>;
type AppActionType = TasksActionType | TodolistsActionType;
export type AppDispatchType = ThunkDispatch<RootState, unknown, AppActionType>;

// @ts-ignore
window.store = store;
