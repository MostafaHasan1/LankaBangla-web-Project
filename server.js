const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/users', userRoutes);

const PORT = 3300;
app.listen(PORT, () => {
    console.log('Server started on http://localhost:${PORT}');
});