function renderCode(event) {
  const code = event.keyCode;
  let key = event.key;
  if (key === " ") key = 'Space';

  document.getElementById('code').innerHTML = code;
  document.getElementById('key').innerHTML = key;
}

window.addEventListener('keydown', renderCode);
