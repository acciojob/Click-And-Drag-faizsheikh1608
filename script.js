// Your code here.
const dragContainer = document.getElementById('dragContainer');

let isDragging = false;
let startX;
let scrollLeft;

dragContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  dragContainer.classList.add('active');
  startX = e.pageX - dragContainer.offsetLeft;
  scrollLeft = dragContainer.scrollLeft;
});

dragContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  dragContainer.classList.remove('active');
});

dragContainer.addEventListener('mouseup', () => {
  isDragging = false;
  dragContainer.classList.remove('active');
});

dragContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - dragContainer.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scrolling speed
  dragContainer.scrollLeft = scrollLeft - walk;
});
