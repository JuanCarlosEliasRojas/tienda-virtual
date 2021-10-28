const adminController = require('../controller/adminController')

module.exports = async(app)=>{
    app.get('/productos',async(req,res)=>{
        res.send(await adminController.listaProductos());
    });

    app.post('/newproducto',async(req,res)=>{
        let producto=req.body;
        res.send(await adminController.createProducto(producto));
    });
}

