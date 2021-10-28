const sequelize = require('../db/conexion');
module.exports = class adminModel{
    constructor(producto){
        this.producto = producto;
    }

    async list (){
        let result = await sequelize.query("SELECT * FROM productos");
        return result [0];
    }

    async create(producto){
        let result = await sequelize.query("INSERT INTO productos (id,nombe,categoria,precio,cantidad,descripcion) VALUES('"+producto.id+"','"+producto.nombe+"','"+producto.categoria+"','"+producto.precio+"','"+producto.cantidad+"','"+producto.descripcion+"')");
        return result;
    }
}