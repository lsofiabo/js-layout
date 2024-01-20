class Tabs {
    static active_tab = 'info';
    static tabs = [
        {
            name: 'База знань',
            type: 'database',
        },
        {
            name: 'Інформація',
            type: 'info',
        },
    ];
}

class InfoTab {
    img = {
        src: '/img/community/telegram.png',
        class: 'we-re-in',
    };
    h = {
        text: 'Що таке база знань?',
        class: 'heading',
    };
    text = {
        text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
        class: 'article-text',
    };
    button = {
        text: "Перейти до ком'юніті у Телеграм",
        class: 'cta-social',
        href: 'https://t.me/it_brains_help_bot',
    };
}

module.exports = { Tabs, InfoTab };
