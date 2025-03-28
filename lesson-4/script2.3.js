let titleProject = prompt('укажите название проекта?');   // 1.Запрашиваем название проекта
let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');   // 2.Запрашиваем типы экранов
let responsive = prompt('Нужен ли респонсивный сайт?');   // 3.Запрашиваем нужен ли респонсивный сайт

let service1 = prompt('Какой сервис нужен?'); // 4.1 Запрашиваем сервис
let servicePrice1 = parseFloat(prompt('Сколько это будет стоить?')) || 0; // 4.2 Запрашиваем цену. И переводим в числовое значение. Добавим еще 0-е значение (рекомендация от коллег)
let service2 = prompt('Какой еще сервис нужен?'); // 4.3 Запрашиваем доп. сервис
let servicePrice2 = parseFloat(prompt('Сколько  будет стоить дополнительный сервис?')) || 0; // 4.4 Запрашиваем цену доп. сервиса. И переводим в числовое значение. Добавим еще 0-е значение (рекомендация от коллег)

let screenPrice = parseFloat(prompt('Сколько стоит разработка экранов?')) || 0; // 5.0 Запрашиваем цену экранов
let fullPrice = screenPrice + servicePrice1 + servicePrice2; // 5.1 Просчитываем цену проекта


// 6. Вычисляем сумму за вычетом комиссии партнера
let commissionPercent = 10; // Можно изменить на 10-15%
let servicePercentPrice = Math.round(fullPrice - (fullPrice * (commissionPercent / 100)));
console.log(`Итоговая сумма за вычетом ${commissionPercent}% комиссии: ${servicePercentPrice}`);


// 7. Проверяем условия скидки
if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%");
} else if (fullPrice >= 20000 && fullPrice <= 50000) {
    console.log("Сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice < 20000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
    console.log("Что-то пошло не так");
}