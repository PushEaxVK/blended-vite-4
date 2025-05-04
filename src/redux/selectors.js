import { createSelector } from '@reduxjs/toolkit';

export const selectCurrentTodo = state => state.todos.currentTodo;
export const selectTodoItems = state => state.todos.items;
export const selectFilter = state => state.filter.filter;

export const selectFilteredItems = createSelector(
  [selectTodoItems, selectFilter],
  (tasks, filter) => {
    return tasks.filter(task => task.text.includes(filter));
  },
);
