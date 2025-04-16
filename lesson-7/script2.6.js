const gameBotFunction = function () {

    // Функция для проверки: является ли значение числом
    function checkIsNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    // Функция для генерации случайного числа в заданных границах
    function randomGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let mysteryNumber = randomGenerate(1, 100);  // Бот загадывает число
    let tries = 5;  // Количество попыток, можно менять

    // Рекурсивная функция проверки результата
    function getResult() {

        if (tries === 0) {  // Если попытки кончились
            let restart = confirm('Попытки закончились! Хотите попробовать снова?');
            if (restart) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
                getResult();  // перезапуск
            } else {
                alert('Вы завершили игру.');
                return;
            }
        }

        let answer = prompt(`Угадайте число от 1 до 100. Осталось попыток: ${tries}`);

        if (answer === null) {  // Если пользователь нажал Отмена
            alert('Вы завершили игру.');
            return;
        }

        answer = answer.trim();

        // Проверяем, что введено корректное число
        while (!checkIsNumber(answer) && answer !== null) {
            answer = prompt('Введите корректное число без букв и пробелов!').trim();
            if (answer === null) {
                alert('Вы завершили игру.');
                return;
            }
        }

        let answerNum = parseFloat(answer);

        // Сравниваем ответ с загаданным числом
        if (answerNum > mysteryNumber) {
            alert(`Загаданное число меньше! Осталось попыток: ${tries - 1}`);
            tries--;
            getResult();
        } else if (answerNum < mysteryNumber) {
            alert(`Загаданное число больше! Осталось попыток: ${tries - 1}`);
            tries--;
            getResult();
        } else {
            let restart = confirm(`Поздравляю! Вы угадали число ${mysteryNumber}! Хотите сыграть ещё раз?`);
            if (restart) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                tries = 0;
                alert('Спасибо за игру!');
            }
        }
    }

    getResult();  // Старт игры
};

gameBotFunction();  // Запуск игры