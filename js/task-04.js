let counterValue = 0;
const valueRef = document.getElementById('value');
const incrementBtn = document.querySelector('button[data-action="decrement"]');
const decrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener('click', () => {
  counterValue--;
  valueRef.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
  counterValue++;
  valueRef.textContent = counterValue;
});
