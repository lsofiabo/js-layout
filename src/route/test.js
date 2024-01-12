// Підключаємо технологію express для back-end сервера
const express = require('express');
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router();

const Test = require('../class/test');

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
    // res.render генерує нам HTML сторінку

    // ↙️ cюди вводимо назву файлу з сontainer
    res.render('index', {
        name: 'index',
        component: ['blog-post'],

        title: 'My Blog',

        data: {
            // test: new Test().test,
            profile_img: '1',
            blog: [
                {
                    hasBubbles: true,
                    bubbles: [
                        {
                            accent: 'orange',
                            text: 'Important',
                        },
                        {
                            accent: 'red',
                            text: 'New',
                        },
                    ],
                    date: '25.01',
                    text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
                },
                {
                    greyed: true,
                    hasBubbles: true,
                    bubbles: [
                        {
                            accent: 'orange',
                            text: 'Important',
                        },
                        {
                            accent: 'red',
                            text: 'New',
                        },
                    ],
                    date: '15.01',
                    text: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
                },
                {
                    hasBubbles: true,
                    bubbles: [
                        {
                            accent: 'orange',
                            text: 'Important',
                        },
                        {
                            accent: 'red',
                            text: 'New',
                        },
                    ],
                    date: '25.01',
                    text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
                },
            ],
        },
    });
    // ↑↑ сюди вводимо JSON дані
});

// Підключаємо роутер до бек-енду
module.exports = router;
