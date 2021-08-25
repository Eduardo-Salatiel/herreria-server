require('dotenv').config({path: 'variables.env'});
const bodyParser = require('body-parser');
const connectDatabase = require('./database/connectDatabase');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors())

app.use(fileUpload());

connectDatabase();

app.use('/api',routes);

app.listen(process.env.PORT, () => (
    console.log("Escuchando el puerto 8000")
))

