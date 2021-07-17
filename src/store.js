import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

function addTodo(text) {
  return {
    type: ADD,
    text,
  };
}

function deleteTodo(id) {
  return {
    type: DELETE,
    id,
  };
}

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
