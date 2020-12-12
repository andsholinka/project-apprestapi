const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(30000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:port in a browser to see the output.