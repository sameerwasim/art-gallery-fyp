var cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
var router = express.Router({strict: true});
// use cors
var corsOptions = { origin: ['http://localhost:3000', 'http://localhost:3001'] }
app.use(cors(corsOptions))
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(express.json())

app.use('/', router)
app.use('/public', express.static('public'))
require('./app/routes/routes')(app);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
