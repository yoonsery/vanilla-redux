import { createStore } from 'redux';

const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

number.textContent = 0;

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return (count = count + 1); // reducer가 리턴하는 것이 어플리케이션의 state가 된다
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

// change를 store에서 감지하고 싶으면 subscribe하면 된다
countStore.subscribe(onChange);

console.log(countStore.getState());

// dispatch가 reducer를 불러서 action을 보낸다
// (action은 reducer와 커뮤니케이트하는 방법)
// action은 오브젝트이고 type이 있어야 함
add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
