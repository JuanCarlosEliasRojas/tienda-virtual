function tablaProductos(){
    async function getProductos(){
        const HTMLResponse = document.querySelector('.tabla_productos');
        HTMLResponse.innerHTML='';
        let url = await fetch('http://localhost:3000/productos');
        const data =await url.json(url);

        let tpl= ` `;
        for (let i=0 ;i<data.length;i++){
            tpl = ` 
            <tr>
             <td scope = "row">${data[i].id}</td>
             <td>${data[i].nombe}</td>
             <td>${data[i].categoria}</td>
             <td>${data[i].precio}</td>
             <td>${data[i].cantidad}</td>
             <td>${data[i].descripcion}</td>
             
            </tr>`
            HTMLResponse.innerHTML +=`${tpl}`;
        }
    }

    getProductos();
}
tablaProductos();

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