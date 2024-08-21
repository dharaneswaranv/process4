const service = require('../service');

exports.addController = async (req,res)=>{

    try {
        const {tittle,amount} = req.body;
        const result = await service.addExpense(tittle,amount);
        res.json({status:true,message:"Add Sucessfully....!"});
        
    } catch (error) {
        res.json({status:true,message:error.message});
    }
}