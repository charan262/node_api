import express from 'express';
const app = express();
var mongoose = require('mongoose');
import path from 'path';
const route = path.join(__dirname, './src/routes')
import catalog from './src/routes/catalog';
import keys from './src/config/keys';

mongoose.connect(keys.DB_URL, { useNewUrlParser: true });
app.use('/catalog', catalog);


const PORT = process.env.PORT || 5000
app.listen(PORT);