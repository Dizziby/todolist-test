import React from "react";
import { FilterValuesType, TaskType } from "../../types";
import { EditableSpan } from "../common/EditableSpan";
import { FullInput } from "../common/FullInput";
import { DeleteOutlined } from "@ant-design/icons";
import { Task } from "./Task";
import Filters from "./Filters";
import styles from "./Todolist.module.css";

function Todolist({
  todolistID,
  title,
  tasks,
  activeFilter,
  removeTask,
  changeFilter,
  addTask,
  changeTaskStatus,
  removeTodolist,
  editTaskName,
  editTodolistName,
}: {
  todolistID: string;
  title: string;
  tasks: Array<TaskType>;
  activeFilter: FilterValuesType;
  removeTask: (todolistID: string, taskID: string) => void;
  changeFilter: (todolistID: string, filter: FilterValuesType) => void;
  addTask: (todolistID: string, title: string) => void;
  changeTaskStatus: (
    todolistID: string,
    taskId: string,
    isDone: boolean,
  ) => void;
  removeTodolist: (todolistID: string) => void;
  editTodolistName: (todolistID: string, newTitle: string) => void;
  editTaskName: (todolistID: string, taskID: string, newTitle: string) => void;
}) {
  const handleChangeFilter = (filter: FilterValuesType) =>
    changeFilter(todolistID, filter);

  const handleRemoveTodolist = () => {
    removeTodolist(todolistID);
  };

  const handleAddTask = (title: string) => {
    addTask(todolistID, title);
  };

  const handleEditTitleTodolist = (newTitle: string) => {
    editTodolistName(todolistID, newTitle);
  };

  const getTaskForRender = (
    filter: FilterValuesType,
    tasks: Array<TaskType>,
  ) => {
    let taskForRender;
    switch (filter) {
      case "completed":
        taskForRender = tasks.filter((task) => task.isDone);
        break;
      case "active":
        taskForRender = tasks.filter((task) => !task.isDone);
        break;
      default:
        taskForRender = tasks;
    }
    return taskForRender;
  };

  const taskForRender: Array<TaskType> = getTaskForRender(activeFilter, tasks);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <EditableSpan value={title} setValue={handleEditTitleTodolist} />
        <button className={styles.button} onClick={handleRemoveTodolist}>
          <DeleteOutlined />
        </button>
      </h3>
      <FullInput addValue={handleAddTask} />
      <Filters changeFilter={handleChangeFilter} activeFilter={activeFilter} />
      <div className={styles.tasks}>
        <ul className={styles.taskList}>
          {taskForRender?.length ? (
            taskForRender.map((task) => (
              <Task
                key={task.id}
                task={task}
                changeTaskStatus={(taskId: string, isDone: boolean) =>
                  changeTaskStatus(todolistID, taskId, isDone)
                }
                removeTask={(taskID: string) => removeTask(todolistID, taskID)}
                editTaskName={(taskID: string, newTitle: string) =>
                  editTaskName(todolistID, taskID, newTitle)
                }
              />
            ))
          ) : (
            <span>No tasks</span>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
