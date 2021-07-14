import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

// const createTodo = (todo) => {
//   const li = document.createElement('li');
//   li.textContent = todo;
//   ul.appendChild(li);
// };

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = '';
  store.dispatch({ type: ADD_TODO, text: todo });
  // createTodo(todo);
};

form.addEventListener('submit', onSubmit);
