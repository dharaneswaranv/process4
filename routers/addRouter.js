
const addExpenseController  = require("../controller/addController")
const router = require("express").Router();


router.post('/addExpense',addExpenseController.addController);


module.exports = router;

