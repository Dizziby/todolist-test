export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
  date: number
};

export type FilterValuesType = "all" | "active" | "completed";

export type TasksType = {
  [key: string]: Array<TaskType>;
};

export type FilterType = { value: FilterValuesType; label: string };
