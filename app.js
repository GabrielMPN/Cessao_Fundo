const express = require('express');
const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./connection').db;
  db.attTables();

//rotas
const readcsv = require('./routes/readCsv.js');
app.use('/readcsv', readcsv);

app.listen(port, () => {
  console.log('Servidor rodando na porta ' + port + '!')
});