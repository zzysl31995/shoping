let express = require('express');
let app = express();
app.listen(3001);

let ad = require('./home/ad');
app.get('/api/ad',(req,res)=>{
    res.send(ad)
});