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

    async update(producto){
        let result = await sequelize.query("SELECT * FROM productos WHERE id =" + producto.id);
        if(result[0][0] != undefined){
            let result = await sequelize.query("UPDATE productos SET [nombe]= '"+producto.nombe+"',[categoria]= '"+producto.categoria+"',[precio]= '"+producto.precio+"',[cantidad]= '"+producto.cantidad+"',[descripcion]= '"+producto.descripcion+"' WHERE [id]= '"+producto.id+"';" );
           return result;

        }else{
            return " ";
        }
    }
}