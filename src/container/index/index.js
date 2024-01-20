import {
    createElement,
    createHeader,
    createBlog,
} from '../../script/layout';

const page = document.getElementById('main');
const title = createElement('h1', '', 'My blog');

page.append(createHeader());
const blog = createBlog();
console.log(blog);
page.append(blog);
