const modalWindow = document.querySelector('.modal');
const modalBatman = document.querySelector('.modal-batman');
let buttonModal = document.querySelectorAll('.play-button_spider-man');
let buttonBatman = document.querySelectorAll('.play-button_batman');

//перебираем все кнопки и прослушиваем событие по клику
buttonModal.forEach((item, i) => {
   item.addEventListener('click', () => {
      modalWindow.classList.add('active');
   });
});

//убираем класс active когда мы кликнем вне модалки
modalWindow.addEventListener('click', () => {
   modalWindow.classList.remove('active')
});



//перебираем все кнопки и прослушиваем событие по клику
buttonBatman.forEach((item, i) => {
   item.addEventListener('click', () => {
      modalBatman.classList.add('active')
   });
});

//убираем класс active когда мы кликнем вне модалки
modalBatman.addEventListener('click', () => {
   modalBatman.classList.remove('active')
});