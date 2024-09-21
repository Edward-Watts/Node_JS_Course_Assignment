const http = require('http');

const path = require('path');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')))

const users = require('./routes/users');
const addUsers = require('./routes/add-users');

app.use( users );
app.use( '/admin', addUsers );


app.listen(3030);