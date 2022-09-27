const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3333;

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send({message: 'Hello!'})
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});

module.exports = app;