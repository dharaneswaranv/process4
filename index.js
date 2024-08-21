const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');
const addRouter = require('./routers/addRouter');
const parser = require('body-parser');

const port = 4000;

app.use(parser.json());
app.use(cors());
app.use('/',addRouter);


app.listen(port,()=>{
    console.log("Router connected to port "+port);
});


