const express = require('express');
const app = express();
var path = require('path');
const route = path.join(__dirname, './src/routes')

const greet = require(`${route}/greeting.js`);
const auth = require(`${route}/auth.js`);

app.use(greet);
app.use(auth);


const PORT = process.env.PORT || 5000
app.listen(PORT);