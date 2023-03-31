/*
Автоматизируй тест-кейс: примени селекторы из таблицы.
Впиши команды вместо комментариев, которые начинаются со слова "to do".
*/

const puppeteer = require('puppeteer');
async function testYaRu(){
    console.log('Запуск браузера');
const browser =  await puppeteer.launch();

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу ya.ru');
     await page.goto('https://ya.ru/');

    console.log('Ввод текста "Автоматизация тестирования" в поисковую строку');
    const searchField = await page.$('#text');
    await searchField.type('Автоматизация тестирования');

    console.log('Клик в кнопку "Найти"');
    const searchButton = await page.$('.button[type=submit]');
    await searchButton.click();

    console.log('Закрытие браузера');
    await browser.close();
}

testYaRu();

/*
Теперь нужно проверить, что результат выдачи по запросу — непустой:
Подожди, пока результаты отобразятся.
Получи результаты поиска.
Если результаты поиска отобразились, выведи в консоль «Результаты поиска отобразились». Если результаты поиска не найдены, выведи в консоль «Результаты поиска не найдены».
*/

const puppeteer = require('puppeteer');

async function testYaRu(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch();

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу ya.ru');
    await page.goto('https://ya.ru/');

    console.log('Ввод текста "Автоматизация тестирования" в поисковую строку');
    const searchField = await page.$('#text');
    await searchField.type('Автоматизация тестирования');

    console.log('Клик в кнопку "Найти"');
    const searchButton = await page.$('.button[type=submit]');
    await searchButton.click();

    console.log('Ожидание перехода в страницу поисковых результатов');

    console.log('Получение элементов результата поиска');
    let result = await page.$('.serp-item');

    console.log('Сравнение ОР и ФР');
    await page.waitForNavigation('.serp-item');

       if (result === null){
     console.log('Результаты поиска не найдены');
    }
    else {
       console.log('Результаты поиска отобразились');
    }

    console.log('Закрытие браузера');
    await browser.close();
}

testYaRu();