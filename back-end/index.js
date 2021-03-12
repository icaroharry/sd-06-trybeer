const express = require('express');
require('dotenv').config();

const log = require('./middlewares/log');
const UserController = require('./controller/UserController');
const LoginController = require('./controller/LoginController');
const { NOT_FOUND } = require('./schema/statusSchema');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3001;

app.use(express.json());
app.use(log);

app.use('/user', UserController);
app.use('/login', LoginController);

app.all('*', (req, res) => res.status(NOT_FOUND).json({ message: 'Route not found' }));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
