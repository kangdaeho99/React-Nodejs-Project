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
    // result = result.toObject();
    // delete result.password;
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


app.post('/login', async (req, resp) =>{
    console.log(req.body);
    // resp.send(req.body);
    if(req.body.password && req.body.email){
        //mongodb에서 findOne은 password와 email이 같은것 찾는것임 일종의 where
        let user = await User.findOne(req.body).select("-password");
        if(user){
            resp.send(user)
        }else{
            resp.send({result:'No User Found'})
        }
        
    }else{
        resp.send({result:'No User Found'})
        
    }


    // resp.send(user);
})
app.listen(5000)
// app.listen(5000, function(){
//     console.log('listening on 5000');
// })