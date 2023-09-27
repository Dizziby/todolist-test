import React, { ChangeEvent, useState } from "react";
import { Input } from "antd";

export const EditableSpan = React.memo(
  ({
    value,
    setValue,
    className = "",
  }: {
    value: string;
    setValue: (value: string) => void;
    className?: string;
  }) => {
    const [edit, setEdit] = useState(false);
    const [newValue, setNewValue] = useState(value);

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setNewValue(e.currentTarget.value);
    };

    const onDoubleClickHandler = () => {
      if (newValue) {
        setEdit(!edit);
        setValue(newValue);
      }
    };

    return edit ? (
      <Input
        style={{ fontWeight: "500", paddingLeft: "4px", paddingRight: "4px" }}
        value={newValue}
        onChange={handleChangeTitle}
        autoFocus
        onBlur={onDoubleClickHandler}
        className={className}
      />
    ) : (
      <span
        style={{ fontWeight: "500", color: "#3A354D", wordBreak: "break-all" }}
        onDoubleClick={() => setEdit(true)}
        className={className}
      >
        {value}
      </span>
    );
  },
);
