let express = require('express');
let app = express();
app.get('/json',(req,res)=>{
    if(process.env.MESSAGE_STYLE = "upparcase"){
        res.json({"message":"HELLO JSON"})
    }
})



































 module.exports = app;
