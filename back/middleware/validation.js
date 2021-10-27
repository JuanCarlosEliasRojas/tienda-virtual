const Joi = require('joi');
const{loginModel}=require('./validationModels/login');
const{userModel}=require('./validationModels/register');

module.exports.loginValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body,loginModel,"Los datos no son correctos")
        return next();
    }catch(error){
        console.log("Error de validacion " + error);
        res.status(500).json({error:error.message})
    }
}


module.exports.userValidation = async function(req,res,next){
    try{
        await Joi.attempt(req.body,userModel,"Los datos ingresados para el registro no son correctos ")
        return next();
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message})
    }
}