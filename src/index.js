const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');
let count = 0;
number.textContent = count;

const updateText = () => {
  number.textContent = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
