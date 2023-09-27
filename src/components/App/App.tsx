import React from "react";
import "./App.css";
import { FullInput } from "../common/FullInput";
import Todolist from "../Todolist/Todolist";
import { FilterValuesType } from "../../types";
import {
  addTaskAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from "../../store/reducers/tasksReducer";
import {
  addTodolistAC,
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  removeTodolistAC,
} from "../../store/reducers/todolistsReducer";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

function App() {
  const todolists = useAppSelector((state) => state.todolists);
  const tasks = useAppSelector((state) => state.tasks);

  const dispatch = useAppDispatch();

  const removeTodolist = (todolistID: string) => {
    dispatch(removeTodolistAC(todolistID));
  };

  const addTask = (todolistID: string, title: string) => {
    dispatch(addTaskAC(title, todolistID));
  };

  const removeTask = (todolistID: string, taskID: string) => {
    dispatch(removeTaskAC(taskID, todolistID));
  };

  const changeTaskStatus = (
    todolistID: string,
    taskId: string,
    isDone: boolean,
  ) => {
    dispatch(changeTaskStatusAC(taskId, isDone, todolistID));
  };

  const changeFilter = (id: string, filter: FilterValuesType) => {
    dispatch(changeTodolistFilterAC(id, filter));
  };

  const addTodolist = (title: string) => {
    dispatch(addTodolistAC(title));
  };

  const editTodolistName = (id: string, title: string) => {
    dispatch(changeTodolistTitleAC(id, title));
  };

  const editTaskName = (todolistId: string, taskId: string, title: string) => {
    dispatch(changeTaskTitleAC(taskId, title, todolistId));
  };
  return (
    <div className="App">
      <div>
        <FullInput addValue={addTodolist} />
        <div className={"board"}>
          {todolists.map((el) => (
            <Todolist
              key={el.id}
              todolistID={el.id}
              title={el.title}
              tasks={tasks[el.id]}
              activeFilter={el.filter}
              removeTask={removeTask}
              changeFilter={changeFilter}
              addTask={addTask}
              changeTaskStatus={changeTaskStatus}
              removeTodolist={removeTodolist}
              editTodolistName={editTodolistName}
              editTaskName={editTaskName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
