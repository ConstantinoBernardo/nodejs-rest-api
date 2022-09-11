import StockControllers from "../controllers/stock-controllers.js";
import LogisticControllers from "../controllers/logistic-controllers.js"
import ProductModel from '../models/product-model.js'

export default router=> {
    console.log('OK');
/**
*======== Welcome to API ROUT ===========
*/    
    router.get('/',(req,res)=>{
	res.json({ message: "Welcome to Node.js application." });
    });
    
/**
*======== PRODUCTS ROUTS ===========
*/    
    router.get('/products/stock/',StockControllers.stock);
    router.get("/products/:id", StockControllers.product);
    router.post('/products/stock/new/',StockControllers.newProduct)

/**
*======== LOGISTIC ROUTS ===========
*/    
    router.get('/logistic/sales',LogisticControllers.sales);
    router.get("/logistic/sales/:id", LogisticControllers.oneSale);
    router.post("/logistic/sales/new", LogisticControllers.newSales);

};
