import LogisticModel from "../models/logistic-model.js";

export default
class LogisticControllers{
    
    static sales(req,res){
	    var salesData= LogisticModel.getSales();
	    if(salesData.err) return res.send('error');
	    res.json(salesData.data);
    }
    
    static oneSale(req,res){
	let saleId=req.params.id;
	let saleData = LogisticModel.getSalesProduct(saleId);
	if(saleData.err) return res.send('error');
	res.json(saleData.data);
    }
    
    static newSales(req,res){
	if(!req.body.id || ! req.body.product){
	    return res.status(400).send({
		message: "Content can not be empty!"
	    });
	}
	let returnValue = LogisticModel.newSalesData(req.body)
	if (returnValue.err) return res.status(500).send({
	    message:'error to insert new product!'
	});
	res.status(200).send({
	    message: 'successfull to insert new product'    
	})
    }
    
   

}
