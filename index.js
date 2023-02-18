const express = require('express')
const app = express();

app.get("/", (req, resp)=>{
    resp.send("app is working.ewqeqw..");
});

app.listen(5000)
// app.listen(5000, function(){
//     console.log('listening on 5000');
// })