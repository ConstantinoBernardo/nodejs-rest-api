import ProductModel from "../models/product-model.js";


export default
class StockControllers{
    
    static stock(req,res){
	var stockData= ProductModel.getStock();
	console.log(stockData,'jjj')
	if(stockData.err) return res.send('error');
	res.json(stockData);
    }
    
    static product(req,res){
	let productId=req.params.id;
	let productData = ProductModel.getProductStock(productId);
	
	if(productData.err) return res.send('error');
	res.json(productData.data);
    }
    
    static newProduct(req,res){
	if(!req.body.id || ! req.body.name){
	    return res.status(400).send({
		message: "Content can not be empty!"
	    });
	}
	let returnValue = ProductModel.newProductStock(req.body)
	if (returnValue.err) return res.status(500).send({
	    message:'error to insert new product!'
	});
	res.status(200).send({
	    message: 'successfull to insert new product'    
	})
    }
    
    

}
