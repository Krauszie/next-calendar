import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Todo = {
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTask);
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTask: (
      state,
      action: PayloadAction<{ id: string; title: string }>
    ) => {
      const { id, title } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
      }
    },

    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompletion } = TodoSlice.actions;
export default TodoSlice.reducer;
