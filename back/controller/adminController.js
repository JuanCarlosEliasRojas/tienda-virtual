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


module.exports.updateProducto = async(producto)=>{
    let response = new adminModel();
    let result = await response.update(producto);
    if(result != ''){
        return "Producto modificado";
    }else{
        return "El Producto no exite"
    }
    
}
module.exports.deleteProducto = async (id) => {
    let response = new adminModel();
    let result = await response.delete(id);
    if (result != '') {
        return "Producto eliminado.";
    } else {
        return "El producto no existe"
    }
}