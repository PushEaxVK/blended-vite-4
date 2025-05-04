import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { text: 'Todo 1', id: 1 },
    { text: 'Todo 2', id: 2 },
    { text: 'Todo 3', id: 3 },
  ],
  currentTodo: null,
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
    setCurretTodo: (state, action) => {
      if (action.payload) {
        state.currentTodo = state.items.find(
          value => value.id === action.payload,
        );
      } else {
        state.currentTodo = null;
      }
    },
    saveEdit: (state, action) => {
      return {
        ...state,
        items: state.items.map(item =>
          item.id !== action.payload.id ? item : action.payload,
        ),
        currentTodo: null,
      };
    },
  },
});

export const { addTodo, deleteTodo, setCurretTodo, saveEdit } = slice.actions;
export default slice.reducer;
