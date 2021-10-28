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