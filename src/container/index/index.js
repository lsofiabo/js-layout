import { createBlog } from '../../script/blog_layout';

import { createHeader } from '../../script/common_layout';

const page = document.getElementById('main');

page.append(createHeader('1'));
page.append(createBlog());
