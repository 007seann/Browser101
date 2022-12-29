const line = document.querySelector('.line');

const onMouseMove = (e) => {
  line.style.left = e.pageX + 'px';
  line.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);


const circle = document.querySelector('.circle');
const body = document.querySelector('.body');
const onCircleMouseMove = (e) => {
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
  body.innerHTML = `${window.screen.width}`;
}

document.addEventListener('mousemove', onCircleMouseMove);
