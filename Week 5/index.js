const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();

const PORT = process.env.port || 8080;

mongoose.connect('mongodb://<dbusername>:<dbpassword>@ds243728.mlab.com:43728/node-workshop');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => {
    console.log('listening on port: ' + PORT);
});

