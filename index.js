import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const { exec, spawn } = require('child_process');

exec('cpabe-setup', (err, stdout, stderr) => {
  if(err) {
    console.log(err);
  } else {
    console.log(stdout);
    console.log(stderr);
  }
});

app.get('/getPublicKey', (req, res) => {
  res.download(path.join(__dirname + '/pub_key'), 'pub_key');
});

app.get('/getMasterKey', (req, res) => {
  res.download(path.join(__dirname + '/master_key'), 'master_key');
});


app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);