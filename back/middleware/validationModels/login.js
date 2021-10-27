const Joi = require('joi');

module.exports = {
    loginModel : Joi.object().keys({
        usuario: Joi.string().alphanum().min(1).max(30).required(),
        password: Joi.string().min(8).max(50).required()
    }).with('usuario','password')
}