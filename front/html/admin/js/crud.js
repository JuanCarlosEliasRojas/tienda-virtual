function producto(){
    async function new_producto(){
            let id= document.getElementById('id').value;
            let nombe= document.getElementById('nombe').value;
            let categoria= document.getElementById('categoria').value;
            let precio= document.getElementById('precio').value;
            let cantidad= document.getElementById('cantidad').value;
            let descripcion= document.getElementById('description').value;
    
            if(id == null || id.length == 0 || /^\s+$/.test(id)){
                alertify.error('Error campo codigo producto no llenado');
                return false;
            }else{
                if(nombe == null || nombe.length == 0 || /^\s+$/.test(nombe)){
                    alertify.error('Error campo nombre no llenado no');
                    return false;
                }else{
                    if(categoria == null || categoria.length == 0 || /^\s+$/.test(categoria)){
                        alertify.error('Error campo categoria no llenado');
                        return false;
                    }else{
                        if(precio == null || precio.length == 0 || /^\s+$/.test(precio)){
                            alertify.error('Error campo precio no llenado');
                            return false;
                        }else{
                            if(cantidad == null || cantidad.length == 0 || /^\s+$/.test(cantidad)){
                                alertify.error('Error campo cantidad no llenado');
                                return false;
                            }else{
                                if(descripcion == null || descripcion.length == 0 || /^\s+$/.test(descripcion)){
                                    alertify.error('Error campo descripcion no llenado');
                                    return false;
                                }
                            }
                        }
                    }
                }
            }
    
            let newproducto = {
                id:id,
                nombe:nombe,
                categoria:categoria,
                precio:precio,
                cantidad:cantidad,
                descripcion:descripcion
            };
            let url = await fetch('http://localhost:3000/newproducto',{
                method:"POST",
                mode:"cors",
                headers:{
                    "Content-Type":"application/json",
    
                },
                body:JSON.stringify(newproducto),
            });
            const data = await url.text();
            console.log(data)
            if(data=="Producto creado"){
                alertify
                .alert("Producto Creado correctamente.", function(){
                 alertify.message('OK');
               });
               window.location="./index.html"; 
            }else{
                alertify.error('Error Porfavor revise sus datos');
            }
        }
    new_producto();
    }
    
    
     async function modificacion(){
         let id =document.getElementById('id_e').value;
         let nombe =document.getElementById('nombe_e').value;
         let categoria =document.getElementById('categoria_e').value;
         let precio =document.getElementById('precio_e').value;
         let cantidad =document.getElementById('cantidad_e').value;
         let descripcion =document.getElementById('description_e').value;
    
         if(id == null || id.length == 0 || /^\s+$/.test(id)){
            alertify.error('Error campo codigo producto no llenado');
            return false;
        }else{
            if(nombe == null || nombe.length == 0 || /^\s+$/.test(nombe)){
                alertify.error('Error campo nombre no llenado no');
                return false;
            }else{
                if(categoria == null || categoria.length == 0 || /^\s+$/.test(categoria)){
                    alertify.error('Error campo categoria no llenado');
                    return false;
                }else{
                    if(precio == null || precio.length == 0 || /^\s+$/.test(precio)){
                        alertify.error('Error campo precio no llenado');
                        return false;
                    }else{
                        if(cantidad == null || cantidad.length == 0 || /^\s+$/.test(cantidad)){
                            alertify.error('Error campo cantidad no llenado');
                            return false;
                        }else{
                            if(descripcion == null || descripcion.length == 0 || /^\s+$/.test(descripcion)){
                                alertify.error('Error campo descripcion no llenado');
                                return false;
                            }
                        }
                    }
                }
            }
        }
       let modificar = {
        id:id,
        nombe:nombe,
        categoria:categoria,
        precio:precio,
        cantidad:cantidad,
        descripcion:descripcion
       };
    
       let url = await fetch('http://localhost:3000/modificar',{
        method:"POST",
        mode:"cors",
        headers:{
            "Content-Type":"application/json",
    
        },
        body:JSON.stringify(modificar),
    });
       const data = await url.text();
       console.log (data)
       if(data !="El producto no existe"){
        alert("Producto modificado correctamente.");
        window.location="./index.html"; 
       }else{
        alert("El presupuesto no pudo modificarse.")
        window.location="./index.html";
       }
     }
    
     modificacion();