const sequelize = require('../db/conexion');

module.exports = class registerModel{
    constructor(user){
        this.user= user;
    }

    async create(user){
        let result = await sequelize.query("INSERT INTO users (usuario,nombre,primer_ap,segundo_ap,password,correo,num_cel) VALUES('"+user.usuario+"','"+user.nombre+"','"+user.primer_ap+"','"+user.segundo_ap+"','"+user.password+"','"+user.correo+"','"+user.num_cel+"')")
        return result;
    }
}