const adminController = require('../controller/adminController')

module.exports = async(app)=>{
    app.get('/productos',async(req,res)=>{
        res.send(await adminController.listaProductos());
    });

    app.post('/newproducto',async(req,res)=>{
        let producto=req.body;
        res.send(await adminController.createProducto(producto));
    });

    app.post('/modificar',async(req,res)=>{
        let producto = req.body;
        res.send(await adminController.updateProducto(producto));
    })

    app.delete('/deleteProducto/:id',async(req,res)=>{
        let id = req.params.id
        res.send(await adminController.deleteProducto(id));
    })
};

