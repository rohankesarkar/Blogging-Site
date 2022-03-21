const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const dotenv = require("dotenv")
dotenv.config({ path:"./config.env" })
const defaultPORT = process.env.PORT
const DB = process.env.DATABASE;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Datta-database:D3443t1432@cluster0.y648p.mongodb.net/BackendProject1?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || defaultPORT))
});
