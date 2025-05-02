const tabMenu = document.querySelectorAll(".tab-link");
const tabContent = document.querySelectorAll(".tab-pane");
const tabNum = document.querySelectorAll(".tub-num");

console.log(tabMenu);
console.log(tabContent);

tabMenu.forEach((tabLink, index) => {
  tabLink.addEventListener('click', () => {
    // Удаляем классы у всех tab-pane
    tabContent.forEach(tabItem => { 
      tabItem.classList.remove('active');
    });

    // Добавляем активный класс к нужному tab-pane
    tabContent[index].classList.add('active');

    // Удаляем is-active у всех таб-линков
    tabMenu.forEach(link => {
      link.classList.remove('is-active');
    });

    // Добавляем is-active к текущему табу
    tabLink.classList.add('is-active');
  });
});

tabNum.forEach((item, index) => {
  item.textContent = index + 1;
});