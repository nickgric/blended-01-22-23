import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

 const todosSlice = createSlice({

  name: 'todos',

  initialState,
  // Объект редюсеров
  reducers: {
    addTodo(state, { payload }) {
      state.todos = [...state.todos, payload];
    },
    deleteTodo(state, { payload }) {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;