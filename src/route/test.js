const express = require('express');
const router = express.Router();

const Test = require('../class/test');
const blog_data = new Test().blog_data;

router.get('/', function (req, res) {
    res.render('index', {
        name: 'index',
        component: ['blog-post'],

        title: 'My Blog',

        data: blog_data,
    });
});

module.exports = router;
