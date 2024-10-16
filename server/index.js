const express = require("express");
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());


const db =require("./models");
const PORT =3001;

//ROUTERS

const userROUTER = require('./routes/Users')
app.use("/users",userROUTER)

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log("server is running on 3001");
    });
});

