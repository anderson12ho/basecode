const express = require('express');
const bodyParser = require('body-parser');

const base = require('./routes/base');

const app = express();
const port = 3000;

const router = express.Router();

router.get('/', base);




app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log('server started');
});
