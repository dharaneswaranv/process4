const expenseModel = require('./expenseModel');

class expenseService{
   static async addExpense(tittle,amount){
    try {
        const newExpense = new expenseModel({tittle,amount});
        return await newExpense.save();
        
    } catch (error) {
        throw error;
    }
   }
}


module.exports = expenseService;