const express = require('express')
const cors = require("cors");
require('./db/config.js');
const User = require("./db/User.js");
// const mongoose = require('mongoose');
// mongoose.set("strictQuery", false);

//postman 사용하여 테스트가능.
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    // console.log("api in progress");
    // resp.send("ap in progress");
    resp.send(result);
    // resp.send(req.body);
})
// const connectDB = async() =>{
//     mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
//     console.log
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product', productSchema);
//     const data = await product.find();
//     console.warn(data);
// }
// connectDB();


app.get("/", (req, resp)=>{
    resp.send("app is working.ewqeqw..");


});

app.listen(5000)
// app.listen(5000, function(){
//     console.log('listening on 5000');
// })