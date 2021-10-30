const compraModel = require('../model/compraModel')

module.exports.newCompra = async(compra)=>{
    let response = new compraModel ();
    let result = await response.create(compra);
    if(result){
        return "Compra realizada";
    }else{
        return "Compra no hecha";
    }
}

module.exports.infoPerfil=async(usuario)=>{
    let response = new compraModel();
    let result= await response.readinfo(usuario);
    if(result){
        return result;
    }else{
        return ({'noExiste': "Informacion incompleta"});
    }
}