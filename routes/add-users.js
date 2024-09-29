const path = require('path')

const express = require('express');

const router = express.Router();
const rootDir = require('../utils/path');

const users = [];

router.get('/add-users', (req, res, next)=>{
    res.render('add-users', {pageTitle: "Add User", path: "/admin/add-users"});
});

router.post('/add-users', (req, res, next)=>{
    console.log(req.body);
    users.push({user: req.body.user});
    res.redirect('/');
})

exports.routes = router;
exports.users = users;