async function login(){
    let usuario = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if(usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)){
        alertify.error('Error campo usuario vacio');
        return false;
    }else{
        if(password == null || password.length == 0 || /^\s+$/.test(password)){
            alertify.error('Error campo contraseña vacio');
            return false;
        }else{
            if(password.length < 8){
                alertify.error('La contraseña debe ser maximo de 8 caracteres');
                return false;
            }else{
                if(usuario == 'Admin'|| password == 'admin123456789'){
                    window.location="./admin/index.html"; 
                }
            }
        }
    }
 
   

    let login = {
        usuario: usuario,
        password:password
    };

    let url = await fetch('http://localhost:3000/login',{
        method:"POST",
        mode:"cors",
        headers:{
            "Content-Type":"application/json",
        },
        body : JSON.stringify(login),
    });
  
    const data = await url.json();
    console.log(data.token);

    if (data.token != "Usuario no autenticado") {
        localStorage.setItem('token',JSON.stringify(data.token)) 
        window.location="./index.html"; 
    } else {
      
alertify
.alert("Correo y/o usurio incorrectos", function(){
  alertify.message('OK');
});
    }


}