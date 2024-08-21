const mongo = require('mongoose');
const db = require('./config/db');

const Schema = mongo.Schema;


const expenseSchema = new Schema({
    tittle:{
        type:String,
    },
    amount:{
        type:Number,
    }
});

const expenseModel = db.model("expenses",expenseSchema);

module.exports = expenseModel;


