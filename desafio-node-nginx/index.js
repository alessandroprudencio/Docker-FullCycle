"use strict";

const moment = require("moment");
const express = require('express');
const app = express();
const port = 3000;
const personController = require('./controllers/personController.js');

// VIEW
app.set('view engine', 'ejs');

// executed instantly
(async () => {
  try {
    await personController.createTable();
  } catch (error) {
    console.log(error)
  }
})()

app.use((req, res, next) => {
  moment.locale('pt-br')
  res.locals.moment = moment;
  next();
});

// ROUTE
app.get('/', async (req, res) => {
  try {
    await personController.insertPerson(req.query.name);
    const users = await personController.getPeople();
    res.render('index', {
      users
    });
  } catch (error) {
    res.send(error.message)
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
