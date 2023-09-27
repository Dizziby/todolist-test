import React from "react";
import { EditableSpan } from "../common/EditableSpan";
import { TaskType } from "../../types";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./Task.module.css";
import moment from "moment";

export const Task = React.memo(
  ({
    task,
    removeTask,
    editTaskName,
    changeTaskStatus,
  }: {
    task: TaskType;
    removeTask: (taskID: string) => void;
    changeTaskStatus: (taskId: string, isDone: boolean) => void;
    editTaskName: (taskID: string, newTitle: string) => void;
  }) => {
    const handleChangeStatus = (e: CheckboxChangeEvent) => {
      changeTaskStatus(task.id, e.target.checked);
    };

    const handleChangeTitle = (taskID: string, newTitle: string) => {
      editTaskName(taskID, newTitle);
    };

    return (
      <li className={styles.container}>
        <Checkbox onChange={handleChangeStatus} checked={task.isDone} />
        <div className={styles.data}>
          <EditableSpan
            value={task.title}
            setValue={(newTitle) => handleChangeTitle(task.id, newTitle)}
            className={styles.title}
          />
          <p className={styles.date}>
            ({moment(task.date).format("MM/DD/YY")})
          </p>
        </div>

        <button className={styles.button} onClick={() => removeTask(task.id)}>
          <DeleteOutlined />
        </button>
      </li>
    );
  },
);
