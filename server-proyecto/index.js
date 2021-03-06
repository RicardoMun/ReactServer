const mongoose = require("mongoose");
const express = require("express");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
const routerApi = require("./src/routes");

mongoose.connect(
    `mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`, (err, res) => {
        if(err){
            throw err;
        }else{
            console.log("Succes connection to db");
            app.listen(PORT_SERVER, () => {
                console.log("########################");
                console.log("####### API REST #######");
                console.log("########################");
                console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
            })
        }
    }
)

app.get("/", (req, res) => {
    res.send( "Primer Proyecto React" );
});

routerApi(app);

app.use(express.json());

  