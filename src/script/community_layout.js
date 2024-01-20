import { createElement } from './common_layout';

export const createTabbar = (tabs, active_tab) => {
    const bar_element = createElement('div', 'tabbar');

    for (const tab of tabs) {
        let tab_class = 'tab';
        if (tab.type == active_tab) {
            tab_class += ' tab--active';
        }
        const tab_element = createElement('div', tab_class);
        const tab_text = createElement(
            'span',
            'tab-text',
            tab.name,
        );
        tab_element.appendChild(tab_text);
        bar_element.appendChild(tab_element);
    }
    return bar_element;
};

export const renderTab = (tab_type) => {
    if (tab_type == 'database') {
        return createElement('div');
    }
    if (tab_type == 'info') {
        const infotab =
            require('../class/community_data').InfoTab;
        const tab_data = new infotab();
        const section = createElement(
            'section',
            'tab-section',
        );

        const img = createElement(
            'img',
            tab_data.img.class,
        );
        img.src = tab_data.img.src;

        section.appendChild(img);

        const heading = createElement(
            'h2',
            tab_data.h.class,
            tab_data.h.text,
        );
        section.appendChild(heading);

        const text = createElement(
            'p',
            tab_data.text.class,
            tab_data.text.text,
        );
        section.appendChild(text);

        const button = createElement(
            'a',
            tab_data.button.class,
            tab_data.button.text,
        );
        button.href = tab_data.button.href;
        section.appendChild(button);

        return section;
    }
};
