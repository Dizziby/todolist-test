import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../../types";

const initialState: Array<TodolistType> = [
  { id: "1", title: "Todolist one", filter: "all" },
  { id: "2", title: "Todolist two", filter: "all" },
];

export const todolistsReducer = (
  state: Array<TodolistType> = initialState,
  action: TodolistsActionType,
): Array<TodolistType> => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((el) => el.id !== action.payload.todolistId);
    }
    case "ADD-TODOLIST": {
      return [
        ...state,
        {
          id: action.payload.todolistId,
          title: action.payload.title,
          filter: "all",
        },
      ];
    }
    case "CHANGE-TODOLIST-TITLE": {
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, title: action.payload.title }
          : el,
      );
    }
    case "CHANGE-TODOLIST-FILTER": {
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, filter: action.payload.filter }
          : el,
      );
    }
    default:
      return state;
  }
};

export type TodolistsActionType =
  | ReturnType<typeof removeTodolistAC>
  | ReturnType<typeof addTodolistAC>
  | ReturnType<typeof changeTodolistTitleAC>
  | ReturnType<typeof changeTodolistFilterAC>;

export const removeTodolistAC = (todolistId: string) =>
  ({
    type: "REMOVE-TODOLIST",
    payload: {
      todolistId,
    },
  }) as const;

export const addTodolistAC = (title: string) =>
  ({
    type: "ADD-TODOLIST",
    payload: {
      todolistId: v1(),
      title,
    },
  }) as const;

export const changeTodolistTitleAC = (id: string, title: string) =>
  ({
    type: "CHANGE-TODOLIST-TITLE",
    payload: {
      id,
      title,
    },
  }) as const;

export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) =>
  ({
    type: "CHANGE-TODOLIST-FILTER",
    payload: {
      id,
      filter,
    },
  }) as const;
