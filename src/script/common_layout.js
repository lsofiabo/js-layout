export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag);

    if (className) {
        elem.className = className;
    }

    if (text) {
        elem.innerHTML = text;
    }

    return elem;
};

const HEADER_BUTTONS = [
    {
        href: '/community',
        class: 'icon',
        src: '/svg/back.svg',
    },
    {
        href: '/',
        class: 'profile-picture',
        src: `/img/profiles/`,
    },
];

export const createHeader = (profile_img) => {
    const header = createElement('header', 'page-header');
    const nav = createElement('nav', 'page-nav');

    HEADER_BUTTONS.forEach((params) => {
        const link = createElement('a');
        link.href = params.href;
        const img = createElement('img', params.class);
        if (params.class.startsWith('profile')) {
            img.src = params.src + profile_img + '.png';
        } else {
            img.src = params.src;
        }

        link.appendChild(img);
        nav.appendChild(link);
    });

    header.appendChild(nav);
    const h = createElement('h1', '', 'My Blog');
    header.appendChild(h);
    return header;
};
