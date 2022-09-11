import express from "express"
import cors from "cors"
import bodyParser from "body-parser"; /* deprecated */

import Routes from "./app/routes/routes.js"

const app = express();

//Your APP URL 
app.use(
    cors({origin: "http://localhost:1444"})
);

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */


Routes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});
