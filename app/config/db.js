import {readFileSync,writeFileSync} from "fs";
import path from 'path'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export default
class JSONdb{

	static get(db){
		let getDataDB = {err:null,data:null};
		try{
			getDataDB.data = readFileSync(path.join(__dirname,`../json-db/${db}.json`),'UTF-8');
		}catch(err){
			getDataDB.err=err
		}
		return getDataDB;
	}

	static set(db,newData){
		let newDataJSON = JSON.stringify(newData)
		let returnErr;
		try{
		    writeFileSync(path.join(__dirname,`../json-db/${db}.json`),newDataJSON);
		}catch(err){
		  returnErr = err;
		}
		if(returnErr) return {ok:null, err:returnErr};
		return {ok:true, err:null};
	}
	

}
