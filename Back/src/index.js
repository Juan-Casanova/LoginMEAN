const express = require('express');
const app = express();

require('./dataBase');

app.use(express.json());

app.use('/api',require('./routes/index'))

app.listen(3000);
console.log('Server on port', 3000);