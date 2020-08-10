const { Mongoose } = require("mongoose")

const mongoose = require('mongoose');

mongoose.connect('mongodb://juancasanova:juan_casanova9052@ds063449.mlab.com:63449/prueba',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(db => console.log("ya se pudo papu"))
.catch(err => console.log(err));