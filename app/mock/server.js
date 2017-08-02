let express = require('express');
let app = express();
app.listen(3001);

let ad = require('./home/ad');
let list = require('./home/list');
app.get('/api/ad',(req,res)=>{
    res.send(ad)
});
app.get('/api/list/:city/:page',(req,res)=>{
    res.send(list)
});