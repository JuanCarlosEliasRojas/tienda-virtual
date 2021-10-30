async function compra(){
    let token = JSON.parse(localStorage.getItem('token'));
    let token_decoded = JSON.parse(window.atob(token.split('.')[1])); 

    let usuario = token_decoded.data.usuario;
    
    let cuidad = document.getElementById("direccion").value;
   
  
    if(cuidad == null || cuidad.length == 0 || /^\s+$/.test(cuidad)){
        alertify.error('Error campo cuidad no llenado');
            return false;

      
      }
    
   
    let compra = {
        usuario:usuario,
        cuidad:cuidad
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
    //Regreso de la respuesta
    const data = await url.text();
    console.log(data)
    if (data != "Perfil no creado.") {
      alertify
      .alert("Compra realizada.", function(){
       alertify.message('OK');
       window.location="./index.html"; 
     });
    } else {
        alert("Los datos no pudieron guardarse correctamente.")
    }
}

async function mostrarInf(){
    let token = JSON.parse(localStorage.getItem('token')); 
    let tokenDecoded = decodeURIComponent(window.atob(token.split('.')[1]).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')); 
    let token_decoded = JSON.parse(tokenDecoded); 
    const user = String(token_decoded.data.usuario); 

    const nombre = document.getElementById("nombre");
    const apellido_p = document.getElementById("primer_ap");
    const apellido_s = document.getElementById("segundo_ap");
    const correo = document.getElementById("correo");
    nombre.value = token_decoded.data.nombre;
    apellido_p.value = token_decoded.data.primer_ap;
    apellido_s.value = token_decoded.data.segundo_ap;
    correo.value = token_decoded.data.correo;

    let url = await fetch('http://localhost:3000/compra/'+ user , {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
      
        },
    });
    
    const data = await url.json(url);
    console.log(data)
    if (data.noExiste != "La información del usuario no existe.") {
       
       
        const cd = document.getElementById("cuidad");
       
      
        cd.value = data.cuidad;
     
        
    } else {
      alertify
      .alert("La información del perfil no existe, debe llenar los campos para guardar su información.", function(){
       alertify.message('OK');
     });
    }
}


mostrarInf();