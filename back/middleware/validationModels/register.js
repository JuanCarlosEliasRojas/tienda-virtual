const Joi = require('joi');

module.exports = {
    userModel : Joi.object().keys({
        usuario : Joi.string().min(1).max(50).required(),
        nombre:Joi.string().min(1).max(50).required(),
        primer_ap:Joi.string().min(1).max(50).required(),
        segundo_ap:Joi.string().min(1).max(50).required(),
        password: Joi.string().min(8).max(50).required(),
        correo: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
        num_cel:Joi.number().required()
    }).with('usuario',['nombre','primer_ap','segundo_ap','password','correo','num_cel'])
}