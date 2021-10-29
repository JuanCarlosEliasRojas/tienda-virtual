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

async function aceptarElim(){
    const id = document.getElementById("idBudget");
     const idBudget = String(id.value);

       let url = await fetch('http://localhost:3000/deleteProducto/' +idBudget,{
          method:"DELETE"
                 });

            const data = await url.text();
             console.log(data)
             if(data != "El producto no existe"){
                alert('Producto eliminado');
                window.location="./index.html";
             }else{
                 alert('El registro no exite  y/o ya fue eliminado');
                 window.location="./index.html";
        }
}
