import Model from "./model.js";

export default
class LogisticModel extends Model{
	
    static getSales(){
        let salesData = this.get('logistic',['sales']);
	return salesData;
    }
	
    static getSalesProduct(id){
        let saleData = this.get('logistic',['sales'],id);
	    return saleData	
    }
    
    static setSales(newData){
	let returnValue = this.set('logistc',['sales'],newData);
	return returnValue;
    }
	
    static setSalesData(newData){
		
    }
	
    static newSalesData(newData){
	return this.insert('logistic',['sales'],newData);
    }                    
}
