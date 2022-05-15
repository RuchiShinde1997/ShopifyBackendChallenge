const express = require('express')
const cors = require("cors");
const mongoose = require('mongoose')
const app = express()
const port = 3000
const productsRoute = require('./routes/products') 
const ATLAS_URI = require('./config')

app.use(express.json())
app.use(cors());

mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", () => {
    console.log("Error while connecting to the database");
});

db.once('open', () => {
    console.log("Database connected");
});

app.get("/",(req, res)=>{
    res.send("Hello Shopify Team!")
})

app.use("/items", productsRoute)

app.listen(port, () => {
    console.log("App is listening on port " + port);
});


module.exports = app;
