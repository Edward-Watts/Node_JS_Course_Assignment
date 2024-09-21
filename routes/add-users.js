const path = require('path')

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

router.get('/add-users', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-users.html'))
});

router.post('/add-users', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;