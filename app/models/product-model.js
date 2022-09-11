import Model from "./model.js";

export default
class ProductModel extends Model{
	
    static getStock(){
	    let stockData = this.get('products',['stock']);
		return stockData;
	}
	
	static getProductStock(id){
	    let productData = this.get('products',['stock'],id);
		return productData;
	}
	
	static setStock(newData){
		let returnValue = this.set('products',['stock'],newData);
	    
	    return returnValue;
	    
	}
	
	static setProductStock(newData){
		
	}
	
	static newProductStock(newDta){
		return Model.insert('products',['stock'],newData)
	}                                                   
	
}

