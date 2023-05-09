const inputRangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRangeRef.addEventListener('input', (event) => {
  textRef.style.fontSize = event.currentTarget.value + 'px';
  console.dir(event.currentTarget);
});
