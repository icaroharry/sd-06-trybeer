const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { routerLogin, routerRegister } = require('./controllers');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (_req, res) => res.send('Hello World!'));

app.use('/login', routerLogin);

app.use('/register', routerRegister);

app.use(async (err, _req, res, _next) => {
  res.status(err.status).json(err.message);
});

app.listen(port, () => `Running on ${port}`);