
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  return res.send('GET method');
});

app.post('/', (req, res) => {
  return res.send('POST method');
});

app.put('/', (req, res) => {
  return res.send('PUT method');
});

app.delete('/', (req, res) => {
  return res.send('DELETE method');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);