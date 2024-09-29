const http = require('http');

const path = require('path');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const users = require('./routes/users');
const adminData = require('./routes/add-users');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use( users );
app.use( '/admin', adminData.routes );


app.listen(3030);