const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// panggil routes
const routes = require('./routes');
routes(app);

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});

//Run app, then load http://localhost:port in a browser to see the output.