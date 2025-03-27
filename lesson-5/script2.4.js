// 1. Запрашиваем название проекта
let titleProject = prompt("Название проекта?");

// 2. Запрашиваем типы экранов
let screensValue = prompt("Какие экраны будут использованы? (шаблонные, с уникальным дизайном, с анимациями)");

// 3. Запрашиваем необходимость респонсива
let responsive = confirm("Нужен ли респонсивный сайт?");

// 4. Запрашиваем дополнительные услуги
let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = parseFloat(prompt("Сколько это будет стоить?")) || 0;
let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = parseFloat(prompt("Сколько будет стоить этот второй сервис?")) || 0;

// 5. Запрашиваем стоимость экранов
let screenPrice = parseFloat(prompt("Сколько стоит разработка экранов?")) || 0;

// 1. Функция для подсчета стоимости всех услуг
let getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();

// 2. Функция для подсчета полной стоимости проекта
function getFullPrice() {
    return allServicePrices + screenPrice;
}
let fullPrice = getFullPrice();

// 3. Функция для форматирования названия проекта
function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}
let formattedTitle = getTitle();

// 4. Функция для вычисления суммы за вычетом комиссии
function getServicePercentPrices() {
    const commissionPercent = 10;
    return Math.round(fullPrice - (fullPrice * (commissionPercent / 100)));
}
let servicePercentPrice = getServicePercentPrices();

// 5. Функция для определения скидки
function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log("Сделаем скидку 10%");
    } else if (fullPrice >= 20000 && fullPrice <= 50000) {
        console.log("Сделаем скидку 5%");
    } else if (fullPrice > 0 && fullPrice < 20000) {
        console.log("Скидка не предусмотрена");
    } else {
        console.log("Что-то пошло не так");
    }
}
getRollbackMessage();

// Вывод всех результатов в консоль
console.log(`Название проекта: ${formattedTitle}`);
console.log(`Стоимость всех услуг: ${allServicePrices}`);
console.log(`Полная стоимость проекта: ${fullPrice}`);
console.log(`Итоговая сумма после комиссии: ${servicePercentPrice}`);
console.log("Не забудьте загрузить код в репозиторий на GitHub!");
