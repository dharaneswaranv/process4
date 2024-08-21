const mongoose = require("mongoose");

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/Expense_Tracker").on('open',()=>{
    console.log("connected sucessfully......!");
}).on('error',(err)=>{
    console.log(err.message);
});


module.exports = connection;