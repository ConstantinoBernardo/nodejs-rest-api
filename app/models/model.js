import JSONdb from "../config/db.js";

export default 
class Model{
	

	/**
	*=========================
	*   GET METHODS
	* ========================
	**/
	static get(jsondb,key,id,index){
		let acessData;
		let allData = this.getAllData(jsondb);
	    if(!key || allData.err) return allData;
	    
	    for(let c in key){
			acessData = allData.data[key[c]];
		}
		if(index && 'number' === typeof index){
			acessData = acessData[index];
		}
		if(id){
		   acessData = this.getForId(acessData,id); 
		}

		return {err: null, data: acessData};
	
	}

	static getAllData(jsondb){
		var allDataDB = JSONdb.get(jsondb);
		if(allDataDB.err){
		    return {data:allDataDB.data, err:allDataDB.err} 
		}
		allDataDB.data = JSON.parse(allDataDB.data);
		return {data:allDataDB.data, err:allDataDB.err}
    }
    
    static getForId(data,id){
		let returnData=data;
		for(let c in returnData){
		    if(returnData[c].id == id){
			    return returnData[c]	
			}	
		}
		return returnData={};
	}


    /**
	*======================
	*   SET METHODS
	*======================
	**/
	static set(jsondb,key,newData,id){
		let returnValue
		if(!key) return this.setAll(jsondb,newData);
		var allData = this.getAllData(jsondb);
		if(allData.err) return {ok:false, err:allData.err}
		
		if(id){
		    returnValue =this.setForKey(jsondb,allData,key,newData,id)
		}else{
			returnValue=this.setForKey(jsondb,allData,key,newData)
		}
		
		return returnValue;
	}
	
	static setAll(jsondb,newData){
		let returnValue = JSONdb.set(jsondb,newData);
	    if(returnValue.err) return {ok:null, err:returnValue.err};
	    return {ok:true, err:null };
	}

	static setForKey(jsondb,allData,key,newData,id){
		var returnValue;
		console.log(id,newData)
		if(key.length == 1){
			if(id){
				
				let aux = this.setForId(allData.data[key[0]],id,);
				if (!aux){
					return {ok:false, err:true};

				}
				allData.data[key[0]][aux] =newData
				returnValue = this.setAll(jsondb,allData.data);
			}else{
				allData.data[key[0]]= newData;
				returnValue = this.setAll(jsondb,allData.data);
			}
			
		}

		if(key.length == 2){
			if(id){
				let aux = this.setForId(allData.data[key[0]][key[1]],id,newData);
				if (aux){
					allData.data[key[0]][key[1]] = aux
				}
			}else{
				allData[key[0]][key[1]]= newData;
			returnValue = this.setAll(allData,newData.data);
			}
		}

		if(key.length == 3){
			if(id){
				let aux = this.setForId(allData.data[key[0]][key[1]][key[2]],id,newData);
				if (aux){
					allData.data[key[0]][key[1]][key[2]] = aux
				}
			}else{
				allData[key[0]][key[1]][key[2]]= newData;
			returnValue = this.setAll(allData,newData.data);
			}	
		}
		console.log(returnValue)
		return returnValue;
	}
	
	static setForId(allData,id){
		console.log(allData)
	    let returnData = allData;
		for(let c in returnData){
		    if(returnData[c].id == id){
			    return  c	
			}	
		}
	}
	
	 /**
	*======================
	*   Insert METHODS
	*======================
	**/
	
	static insert(jsondb,key,newData){
		let returnValue;
		if(!key) return {err:true, ok: null};
		var allData = this.getAllData(jsondb);
		if(allData.err) return {ok:false, err:allData.err}
		returnValue = this.insertForKey(jsondb, allData,key, newData);
		return returnValue;
	}
	
	static insertForKey(jsondb,allData,key,newData){
		var returnValue;
		if(key.length == 1){
			allData.data[key[0]].push(newData);
			returnValue = this.setAll(jsondb,allData.data);
			
		}

		if(key.length == 2){
			allData[key[0]][key[1]].push(newData);
			returnValue = this.setAll(allData,newData.data);
		}

		if(key.length == 3){
			allData[key[0]][key[1]][key[2]].push(newData);
			returnValue = this.setAll(allData,newData.data);
		}
		console.log(returnValue)
		return returnValue;
	}
	
}

