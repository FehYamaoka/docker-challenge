const express = require('express');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const mysql = require('mysql');

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    connection.query(' CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id));');

    connection.query(`INSERT INTO people (name) VALUES ('Felipe')`);
    connection.query(`INSERT INTO people (name) VALUES ('Wesley')`);
    connection.query(`INSERT INTO people (name) VALUES ('Teste')`);

    connection.query(`SELECT name FROM people`, (error, results, fields) => {
        res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>
            ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
        </ol>
        `);
    });
});

app.listen(port, () => {
  console.log('Rodando na porta: ', port);
});