const express = require('express');
let db = require('./db');
const Promise = require('bluebird');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

db = Promise.promisifyAll(db, {multiArgs: true});

app.use(express.static('./client/dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// db.queryAsync('insert into `cows` (name, description) values ( ?, ?)', ['tom', 'produces farts, from lactose intolerance.'])
//   .then( () => {
//     console.log('saved!');
//   })
  // .error(error => console.log(error));


/***************************************
   create the routing functions
***************************************/
app.get('/api/cows', (req, res) => {
  return db.queryAsync('SELECT * FROM cows')
    .then((results) => {
      res.status(200).send(results[0])
    })
    .error((error) => res.status(500).send());
})

app.post('/api/cows', (req, res) => {
  const {name, description} = req.body;
  return db.queryAsync('INSERT INTO cows (name, description) VALUES (?, ?)', [name, description])
    .then((results) => {
      res.status(201).send(results);
    })
    .error((error) => {
      res.status(404).send();
    })
});