import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addTodo = createAction('ADD');
const deleteTodo = createAction('DELETE');

// 1. use createAction
/*
const reducer = (state = [], action) => {
  switch (action.type) {
    case addTodo.type:
      return [...state, { text: action.payload, id: Date.now() }];
    case deleteTodo.type:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
*/

// 2. use createReducer, can mutate state!
//  - if you mutate something => don't return
//  - return only new state
const reducer = createReducer([], {
  // didn't return just mutate, (because toolkit & Immer do it)
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  // return new state
  [deleteTodo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
