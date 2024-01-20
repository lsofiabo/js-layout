import { createElement } from './common_layout';

const Test = require('../class/test');
const blog_data = new Test().blog_data;

const createPost = (post) => {
    let post_class = 'blog-post';
    if (post.greyed) {
        post_class += ' blog-post--greyed';
    }
    const post_div = createElement('li', post_class);

    const post_header = createElement(
        'div',
        'blogpost-header',
    );
    if (post.hasBubbles) {
        const bubble_row = createElement(
            'ul',
            'bubble-row',
        );
        for (const bubble of post.bubbles) {
            const bubble_element = createElement(
                'li',
                'bubble-item bubble-item--' + bubble.accent,
                bubble.text,
            );
            bubble_row.appendChild(bubble_element);
        }
        post_header.appendChild(bubble_row);
    }

    const date_span = createElement(
        'span',
        'date',
        post.date,
    );

    post_header.appendChild(date_span);

    const post_text = createElement(
        'p',
        'blogpost-text',
        post.text,
    );

    post_div.appendChild(post_header);
    post_div.appendChild(post_text);
    return post_div;
};

export const createBlog = () => {
    const blog = createElement('ul', 'blog');
    for (const post of blog_data.blog) {
        const post_element = createPost(post);
        blog.appendChild(post_element);
    }
    return blog;
};
