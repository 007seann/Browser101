const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBth = document.querySelector('.footer__button');

function onAdd() {
  // 1. Receiving user input
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  // 2. Creating with items with input
  const item = createItem(text);
  // 3. Add the item in items container
  items.appendChild(item);
  // 4. Follow Scrolling relative to new input item
  item.scrollIntoView({ block: 'center' });
  // 5. Initialize input
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const span = document.createElement('span');
  span.setAttribute('class', 'item__name');
  span.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(span);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

addBth.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
