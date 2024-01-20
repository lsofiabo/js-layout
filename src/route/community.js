const express = require('express');
const router = express.Router();

router.get('/community', function (req, res) {
    res.render('community', {
        name: 'community',
        // component: ['blog-post'],

        title: 'Community',

        // data: blog_data,
    });
});

module.exports = router;
