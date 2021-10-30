const sequelize = require('../db/conexion');
module.exports = class compraModel{
    constructor(compra){
        this.compra=compra;
    }

    async create(compra){
        let result = await sequelize.query("INSERT INTO ticket (usuario,ciudad) VALUES ('"+compra.usuario+"','"+compra.ciudad+"');");
        return result;
    }

    async readinfo(usuario){
        let result = await sequelize.query("SELECT id_ticket,nombre,primer_ap,segundo_ap,correo FROM users INNER JOIN ticket ON users.usuario = ticket.usuario WHERE users.usuario = '" + usuario + "';");
      return result[0][0];
    }
}