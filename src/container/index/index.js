import { createElement } from '../../script/layout';

const page = document.getElementById('main');
console.log(page);
const title = createElement('h1', '', 'My blog');

page.append(title);
