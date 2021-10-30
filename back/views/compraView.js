const compraController  = require ('../controller/compraController')

module.exports = async(app)=>{
    app.post('/compra',async(req,res)=>{
        let compra = req.body;
        let resp = await compraController.newCompra(compra);
        console.log(res);
        res.send(resp);
    });

    app.get('/compra/:user',async(req,res)=>{
        let usuario = req.params.usuario
        let resp = await compraController.infoPerfil(usuario);
        console.log(resp);
        res.send(resp);
    })
}