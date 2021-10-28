const adminModel = require ('../model/adminModel');

module.exports.listaProductos = async() =>{
    let response = new adminModel ();
    let result = await response.list();
    return result;
}

module.exports.createProducto = async(producto)=>{
    let response = new adminModel();
    let result = await response.create(producto);

    if(result){
        return "Producto creado";
    }else{
        return "prducto no creado";
    }
}