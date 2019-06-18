// https://kodaktor.ru/async_03e39

let result = '';
// const values = ... извлеките из первого списка
// const URLs = ... извлеките из второго списка
const mapFunc = el => el.textContent;
const values = Array.from(document.querySelectorAll('#values li')).map(mapFunc);
const urls = Array.from(document.querySelectorAll('#urls li')).map(mapFunc);

document
    .querySelector('button')
    .addEventListener('click',
        async ({target: t}) => {
            // здесь напишите код, последовательно отправляющий запросы
            // согласно спецификации kodaktor.ru/async_tasks

            let response = [];
            for (let i = 0; i < urls.length; i++) {
                let params;
                if (i == 0) params = values[i];
                else params = [values[i], response[i - 1]]

                response[i] = await fetch(urls[i], {
                    method: 'post',
                    body: params
                });
            }
            let result = response[0];
            t.textContent = 'Результат: ' + result;
        }
    );