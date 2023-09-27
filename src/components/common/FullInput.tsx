import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button, Input } from "antd";
import styles from "./FullInput.module.css";

export const FullInput = React.memo(
  ({ addValue }: { addValue: (value: string) => void }) => {
    const [title, setTitle] = useState("");
    const [error, setError] = useState(false);

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value);
      error && setError(false);
    };

    const handleKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
      e.key === "Enter" && handleAddTask();
    };

    const handleAddTask = () => {
      if (title.trim()) {
        addValue(title.trim());
        setTitle("");
      } else {
        setError(true);
      }
    };

    return (
      <div className={styles.container}>
        <Input
          value={title}
          onChange={handleChangeTitle}
          onKeyPress={handleKeyPressAddTask}
          className={error ? "error" : ""}
        />
        <Button
          size="small"
          type="primary"
          onClick={handleAddTask}
          className={styles.button}
        >
          +
        </Button>
      </div>
    );
  },
);
