const { Router } = require('express');
const router = Router();

const user = require('../models/user');

const jwt = require('jsonwebtoken');

router.get('/', (req,res) => res.send("hello world"))

router.post('/signup', async (req,res) => {
    const { email, password}= req.body;
    const newUser = new user({email, password});
    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id}, 'secretkey')

    res.status(200).json({token})
})

router.post('/signin', async (req, res) => {

    const {email, password}=req.body;
    const User = await user.findOne({email})

    if(!User) return res.status(401).send("el correo no existe");
    if(User.password !== password)return res.status(401).send("contraseña equivocada");

    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token});

});

router.get('/home', verifyToken,(req,res) => {
    res.send("SI ENTRAMOS");
})

module.exports = router; 

function verifyToken(req, res, next)
{
    if(!req.headers.authorization)
    {
        return res.status(401).send('no esta autorizado');
    }

    const token = req.headers.authorization.split(' ')[1]

    if(token == 'null'){
        return res.status(401).send('no esta autorizado');
    }

    const payload = jwt.verify(token, 'secretkey')
    req.userId=payload._id;
    next();
}