const { Mongoose } = require("mongoose")

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular-auth',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(db => console.log("ya se pudo papu"))
.catch(err => console.log(err));