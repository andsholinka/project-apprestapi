const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
dotenv.config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));

// panggil routes
const routes = require('./routes');
routes(app);

//daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(process.env.PORT, () => {
    console.log(`App listens to port ${process.env.PORT}`);
});

//Run app, then load http://localhost:port in a browser to see the output.