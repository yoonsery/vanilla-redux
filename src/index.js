import { createStore } from 'redux';

const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

number.textContent = 0;

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return (count = count + 1);
  } else if (action.type === 'MINUS') {
    return (count = count - 1);
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.textContent = countStore.getState();
};

countStore.subscribe(onChange);

console.log(countStore.getState());

add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
