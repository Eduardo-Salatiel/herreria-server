require('dotenv').config({path: 'variables.env'});
const bodyParser = require('body-parser');
const connectDatabase = require('./database/connectDatabase');
const express = require('express');
const fileUpload = require('express-fileupload');
const routes = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(fileUpload());

connectDatabase();

app.use('/api',routes);

app.listen(8000, () => (
    console.log("Escuchando el puerto 8000")
))
