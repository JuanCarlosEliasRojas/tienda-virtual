function registro(){
    async function newRegistro(){
        let usuario = document.getElementById('usuario').value;
        let nombre = document.getElementById('nombre').value;
        let primer_ap = document.getElementById('primer_ap').value;
        let segundo_ap = document.getElementById('segundo_ap').value;
        let password = document.getElementById('password').value;
        let correo = document.getElementById('correo').value;
        let num_cel = document.getElementById('num_cel').value;

        if(usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)){
            alertify.error('Error campo usuario no llenado');
            return false;
        }else{
            if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
                alertify.error('Error campo nombre no llenado');
            return false;
            }else{
                if(primer_ap == null || primer_ap.length == 0 || /^\s+$/.test(primer_ap)){
                    alertify.error('Error campo Primer Apellido no llenado');
            return false;
                }else{
                    if(segundo_ap == null || segundo_ap.length == 0 || /^\s+$/.test(segundo_ap)){
                        alertify.error('Error campo Segundo Apellido no llenado');
                            return false;
                    }else{
                        if(password == null || password.length == 0 || /^\s+$/.test(password)){
                            alertify.error('Error campo Password no llenado');
                            return false;
                        }else{
                            if(correo == null || correo.length == 0 || /^\s+$/.test(correo)){
                                alertify.error('Error campo Correo no llenado');
                                return false;
                            }else{
                                if(num_cel == null || num_cel.length == 0 || /^\s+$/.test(num_cel)){
                                    alertify.error('Error campo Telefono no llenado');
                                        return false;
                                }
                            }
                        }
                    }
                }
            }

        }

        let newusurio = {
            usuario:usuario,
            nombre:nombre,
            primer_ap:primer_ap,
            segundo_ap:segundo_ap,
            password:password,
            correo:correo,
            num_cel:num_cel

        };

        let url =await fetch('http://localhost:3000/newuser',{
            method :"POST",
            mode:"cors",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newusurio),
        });

        const data = await url.text();
        console.log(data)
        if(data == "Usuario creado"){
            alertify
            .alert("Usuario Creado correctamente.", function(){
             alertify.message('OK');
           });
          window.location="./login.html"; 
        }else{
            alertify.error('Error Porfavor revise sus datos');
        }
    }
    newRegistro();
}