import { createSlice } from "@reduxjs/toolkit";
import { TodoData } from "../interfaces/TodoData";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("todoList", "");
  return [];
};

const initialValue = {
  todoList: getInitialTodo(),
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        pinned: false,
        datetime: new Date().toLocaleDateString(),
      };
      state.todoList.push(newTodo);

      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...newTodo,
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([
            {
              ...newTodo,
            },
          ])
        );
      }
    },

    toggleComplete: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo: TodoData) => {
          if (todo.id === action.payload.id) {
            todo.completed = action.payload.completed;
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },

    deleteTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo: TodoData) => todo.id === action.payload.id
      );
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        for (let todo of todoListArr) {
          if (todo.id === action.payload.id) {
            todoListArr.splice(index, 1);
          }
        }
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },

    pinTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo: TodoData) => {
          if (todo.id === action.payload.id) {
            todo.pinned = action.payload.pinned;
          }
        });
        window.localStorage.setItem(
          "todoList",
          JSON.stringify(
            todoListArr.sort((o1: TodoData) => {
              return o1.pinned === true ? -1 : 1;
            })
          )
        );
        state.todoList = [...todoListArr];
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, pinTodo } =
  TodoSlice.actions;

export default TodoSlice.reducer;
