const btn = document.getElementById('btn');
const body = document.querySelector('body');
const text = document.getElementById('hex-value');
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', hexChange);

function hexChange() {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * values.length);
    hex += values[index];
  }
  body.style.backgroundColor = hex;
  text.innerHTML = hex;
}
