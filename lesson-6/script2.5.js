// 1. Функция проверки на число
const checkIsNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

// 2. Получение стоимости экрана с валидацией
let screenPrice;
do {
    screenPrice = prompt('Сколько это будет стоить?');
} while (!checkIsNumber(screenPrice) || screenPrice.trim() === "" || screenPrice === null);
screenPrice = parseFloat(screenPrice);

// 3. Функция для получения стоимости всех услуг
const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let service;
        let servicePrice;
        
        service = prompt(`Какой сервис №${i + 1} нужен?`);
        do {
            servicePrice = prompt(`Сколько будет стоить услуга: ${service}?`);
        } while (!checkIsNumber(servicePrice) || servicePrice.trim() === "" || servicePrice === null);
        
        sum += parseFloat(servicePrice);
    }
    return sum;
};

const allServicePrices = getAllServicePrices();

// Вывод результатов в консоль
console.log(`Стоимость экрана: ${screenPrice}`);
console.log(`Общая стоимость услуг: ${allServicePrices}`);
