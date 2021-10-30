$(document).ready(() => {
    $('#ejecutar').on('click', function (event) {
        event.preventDefault();
        $('.caja').show();
        $('.caja2').hide();
      });
    
      $('#ejecutar2').on('click', function (event) {
        event.preventDefault();
        $('.caja2').show();
        $('.caja').hide();
      });
    
      $('#cart').on('click', function (event) {
        event.preventDefault();
        $('#cart-items').show();
      });
    
      $('#close').on('click', function (event) {
        event.preventDefault();
        $('#cart-items').hide();
      });


    const indexpro = () => {
        $.ajax({
            url: `https://api.mercadolibre.com/sites/MLM/search?q=Computación`,
            type: 'GET',
            crossDomain: true,
            datatype: 'json',
            success: function (response) {
                for (var i = 0; i <= 11; i++) {
                    var photo = response.results[i].thumbnail;
                    console.log(photo);

                    var titleProduct = response.results[i].title;
                    var priceProduct = '$' + '' + response.results[i].price;
                    var template = `
                    <div class="col-md-6 col-lg-4 simpleCart_shelfItem">
       
                    <h6 class="item_name">${titleProduct}</h6>
                  
                    <img class="item_image" style="width: 150px;" src="${photo}" alt="Auto Azul"/>
               
                    <input class="item_Quantity" type="number" min="1" max="10" value="1"/>
                   
                    <div class="item_price">${priceProduct}</div>
                   
                    <a class="item_add" href="javascript:;"> Añadir al carrito </a>
            
                  </div>`;

                    $('#index').append(template);
                };
            }
        }).done((response) => {
            console.log(response);
            console.log(response.results["0"].thumbnail);
        });
    }
    indexpro();



    const productos1 = () => {
        $.ajax({
            url: `https://api.mercadolibre.com/sites/MLM/search?q=Computacion`,
            type: 'GET',
            crossDomain: true,
            datatype: 'json',
            success: function (response) {
                for (var i = 0; i <= 20; i++) {
                    var photo = response.results[i].thumbnail;
                    console.log(photo);

                    var titleProduct = response.results[i].title;
                    var priceProduct = '$' + '' + response.results[i].price;
                    var template = `
                    <div class="card" style="width: 18rem; margin-top: 20px;">
                          <div class="card-body">
                              <img class="card-img-top" style="width: 10rem;" src="${photo}" alt="Card image cap">
                              <h5 class="card-title">${titleProduct}</h5>
                              <p class="card-text">${priceProduct}</p>
                              <a href="#" class="btn btn-primary" style="background-color:#77a8a8"><i class="fas fa-cart-plus"></i></a>  
                              <div id="paypal-button"></div>                          
                          </div>
                       </div>`;

                    $('#productos1').append(template);
                };
            }
        }).done((response) => {
            console.log(response);
            console.log(response.results["0"].thumbnail);
        });
    }
productos1();

    const productos = () => {
        $.ajax({
            url: `https://api.mercadolibre.com/sites/MLM/search?q=Consolas y Videojuegos`,
            type: 'GET',
            crossDomain: true,
            datatype: 'json',
            success: function (response) {
                for (var i = 0; i <= 20; i++) {
                    var photo = response.results[i].thumbnail;
                    console.log(photo);

                    var titleProduct = response.results[i].title;
                    var priceProduct = '$' + '' + response.results[i].price;
                    var template = `<div class="card" style="width: 18rem; margin-top: 20px;">
                          <div class="card-body">
                              <img class="card-img-top" style="width: 10rem;" src="${photo}" alt="Card image cap">
                              <h5 class="card-title">${titleProduct}</h5>
                              <p class="card-text">${priceProduct}</p>
                              <a href="#" class="btn btn-primary" style="background-color:#77a8a8"><i class="fas fa-cart-plus"></i></a>  
                              <div id="paypal-button"></div>                          
                          </div>
                       </div>`;

                    $('#productos2').append(template);
                };
            }
        }).done((response) => {
            console.log(response);
            console.log(response.results["0"].thumbnail);
        });
    }
productos();

});


$(document).ready(function($) {
  
    $('.carrito-total').click(function() {
   
      $('.bolsa').slideToggle();
    });

  });

//SIMPLE CART
simpleCart({
  cartColumns: [
      { view:'image' , attr:'image', label: "Imagen"}, //obtiene la imagen
      { attr: "name", label: "Name"}, //obtiene el nombre
      { view: "currency", attr: "price", label: "Price"},//obtiene el precio
      { view: "decrement", label: "-"}, //Resta el producto
      { attr: "quantity", label: "Qty"}, //obtiene la cantidad del producto
      { view: "increment", label: "+"}, //Suma el producto
      { view: "currency", attr: "total", label: "SubTotal" },// Obtiene el precio total del producto
      { view: "remove", text: "Quitar", label: false} //Quita o remueve el producto
  ],

  cartStyle: "table", 


});

async function logOut(){
    let token = await JSON.parse(localStorage.getItem('token')); //Obtencion del token
    if (token != undefined) {
        localStorage.removeItem('token');
        alert("Ha cerrado sesión");
        window.location="./index.html";
    } else{
        alert("Su sesión ha caducado.");
        window.location="./index.html";
    }
}
