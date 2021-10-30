async function compra(){
    let token = JSON.parse(localStorage.getItem('token'));
    let token_decoded= JSON.parse(window.atob(token.split('.')[1]));
    let usuario = token_decoded.data.usuario;
    let direccion = document.getElementById("direccion").value;

    if(direccion == null || direccion.length == 0 || /^\s+$/.test(direccion)){
        alertify.error('Error campo direccion no llenado');
            return false;
    }

    let compra = {
        usuario:usuario,
        direccion:direccion

    };
    let url = await fetch('http://localhost:3000/compra', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify(compra),
    });
    
    const data = await url.text();
    console.log(data)
    if(data != "Compra no hecha"){
        alertify
        .alert("Compra hecha exitosa mente.", function(){
         alertify.message('OK');
       });
    }else{
        alert("Error al procesar compra")
    }

}


async function mostratInfo(){
    let token = JSON.parse(localStorage.getItem('token')); 
    let tokenDecoded = decodeURIComponent(window.atob(token.split('.')[1]).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')); 
    let token_decoded = JSON.parse(tokenDecoded); 
    const usuario = String(token_decoded.data.usuario); 

    const nombre = document.getElementById("nombre");
    const primer_ap = document.getElementById("primer_ap");
    const segundo_ap = document.getElementById("segundo_ap");
    const correo = document.getElementById("correo");

    nombre.value = token_decoded.data.nombre;
    primer_ap.value = token_decoded.data.primer_ap;
    segundo_ap.value = token_decoded.data.segundo_ap;
    correo.value = token_decoded.data.correo;

    let url = await fetch('http://localhost:3000/compra/'+ usuario,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
      
        },
    });

    const data = await url.json(url);
    console.log(data)
    if(data.noExiste != "Informacion incompleta"){
        const direccion = document.getElementById("direccion");
        direccion.value=data.direccion;
    }else{
        alertify
      .alert("Para finalizar la compra ingresa la direccion", function(){
       alertify.message('OK');
     });
    }
}
mostratInfo();