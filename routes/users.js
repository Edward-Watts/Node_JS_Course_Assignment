const path = require('path')

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

const adminData = require('./add-users')

router.get('/', (req, res, next)=>{
    const users = adminData.users;
    res.render('users', {pageTitle: 'My Users', path: '/', users: users});
})

module.exports = router;