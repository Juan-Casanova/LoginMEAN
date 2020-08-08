const { Mongoose } = require("mongoose")

const mongoose = require('mongoose');

mongoose.connect('mongodb://<juan casanova>:<juan_casanova9052>@ds135421.mlab.com:35421/juan-casanova',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(db => console.log("ya se pudo papu"))
.catch(err => console.log(err));