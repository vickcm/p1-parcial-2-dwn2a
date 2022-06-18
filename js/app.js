
var productos = [];
const selectorUniversal = document.getElementById("infoproductos");
const infoCarrito=document.getElementById("carrito-contenedor");


function creaObjeto() {

    let productoUno = new Producto( 
    
    
        "1", 
        "Smart TV 55 Philips",
        "tv",
        "Smart TV 55 4K Philips 55PUD6654/77",
        "77999",
        "1",
        "img/productos/tv1.jpg"
    
    ) 
    
    productos.push(productoUno);
    
    let productoDos = new Producto( 
        
        
        "2", 
        "Smart TV 32 Admiral",
        "tv",
        "Smart TV 32 HD Admiral AD32E20",
        "36999",
        "1",
        "img/productos/tv2.jpg"


    
    ) 
    
    productos.push(productoDos);
    
    let productoTres = new Producto (
        "3", 
        "Smart LED TV 43 AOC",
        "tv",
        "Smart TV 43 Full HD AOC 43S5295/77",
        "48999",
        "1",
        "img/productos/tv3.jpg"


    
    )
    
    productos.push(productoTres);
    
    let productoCuatro = new Producto (
        "4", 
        "Samsung Galaxy S22",
        "celulares",
        "Celular Samsung Galaxy S22 Ultra Green 256GB",
        "254999",
        "1",
        "img/productos/cel1.jpg"


    
    )
    
    productos.push(productoCuatro);

    let productoCinco = new Producto (
        "5", 
        "Motorola G200 5G",
        "celulares",
        "Celular Motorola G200 5G 128 GB Morado + Dongle HDMI",
        "99999",
        "1",
        "img/productos/cel2.jpg"


    
    )
    
    productos.push(productoCinco);

    let productoSeis = new Producto (
        "6", 
        "Celular TCL 20SE 4G",
        "celulares",
        "Celular TCL 20SE 256GB GRIS RVA",
        "45999",
        "1",
        "img/productos/cel3.jpg"


    
    )
    
    productos.push(productoSeis);

    let productoSiete = new Producto (
        "7", 
        "Samsung Galaxy M23",
        "celulares",
        "Celular Samsung Galaxy M23 5G 128GB Light Blue",
        "53999",
        "1",
        "img/productos/cel4.jpg"


        
    
    
    )
    
    productos.push(productoSiete);
    
    let productoOcho = new Producto (
        "8", 
        "Acer Aspire Vero 15,6”",
        "laptops",
        "Notebook Acer Aspire Vero 15,6 Core i5 8GB 256GB",
        "139000",
        "1",
        "img/productos/laptop1.jpg"


        
    
    
    )
    
    productos.push(productoOcho);

    let productoNueve = new Producto (
        "9", 
        "Notebook HP 15,6”",
        "laptops",
        "AMD Ryzen 5 8GB 256GB SSD 15-EF1011LA",
        "116000",
        "1",
        "img/productos/laptop2.jpg"


        
    
    
    )
    
    productos.push(productoNueve);

    let productoDiez = new Producto (
        "10", 
        "Notebook HP Gamer",
        "laptops",
        "Pavilion AMD Ryzen 5 8GB 256 GB SSD 15-ec1035la",
        "164000",
        "1",
        "img/productos/laptop3.jpg"


        
    
    
    )
    
    productos.push(productoDiez);

    let productoOnce = new Producto (
        "11", 
        "Notebook Lenovo 14",
        "laptops",
        "Notebook Lenovo 14 Core i5 8GB 256GB 81WA00EJ",
        "119250",
        "1",
        "img/productos/laptop4.jpg"


        
    
    
    )
    
    productos.push(productoOnce);

    let productoDoce = new Producto (
        "12", 
        "Smart TV 32 Sansei",
        "tv",
        "Smart TV 32 HD Sansei TDS2132HI",
        "36999",
        "1",
        "img/productos/tv4.jpg"


        
    
    
    )
    
    productos.push(productoDoce);

};

creaObjeto();

pintaProductos(productos); 


// filtro 

let filterBtns = document.querySelectorAll(".filter-btn")

// recorro botones de filtro 
filterBtns.forEach(function (btn) {
    
    // escucho clicks 
    btn.addEventListener("click", function (e) {
        // imprimo en pantalla para control del botón 
     console.log(e.currentTarget.dataset.categoria);
     // guardo en una variable la categoría clickeada 
      let category = e.currentTarget.dataset.categoria;
      // aplico filter a productos 
      let productoCategory = productos.filter(function (productoItem) {
       
        // defino el filtro 
        if (productoItem.categoria === category) {
            // returno el producto 
            return productoItem
            ;
          
        }
      });

      // condicional para impresión 
      if (category === "todos") {
        
        //limpia pantalla y pinta todos los productos
        selectorUniversal.innerHTML = "";
        
        pintaProductos(productos)
      } else {

          //limpia pantalla 
        selectorUniversal.innerHTML = "";
        // pinta producto sólo de la categoría
        pintaProductos(productoCategory);

        //pintar producto de cada categoria
       
      }
    });
  });


//pinta productos en pantalla 

function pintaProductos(productos) {
    
    productos.forEach(producto => {
        
        
        selectorUniversal;
        //contenedor de productos 
        let contieneProducto = document.createElement("div")
        //clases para el contenedor de productos 
        contieneProducto.setAttribute("class", "card", "class", "col-4");
        //agrego img 
        let imagen = document.createElement("img");
        // le paso atributo con la ruta src
        imagen.setAttribute("src", `${producto.img}`);

        // agrego la imagen al contenedor 
        contieneProducto.appendChild(imagen)
        //agrego el contiene productos al id del html estático
        selectorUniversal.appendChild(contieneProducto)
        // agrego div para la card 
        let contieneProductoCard = document.createElement("div")
        contieneProductoCard.setAttribute("class", "card-body")
        contieneProducto.appendChild(contieneProductoCard)
        // agrego titulo a la card 
        let titulo = document.createElement("h2");
        // agrego atributos para la card 
        titulo.setAttribute("class", "card-title")
        //asigno valor a la variable titulo. 
        let tituloTexto = producto.nombre;
        titulo.innerText = tituloTexto;
        contieneProductoCard.appendChild(titulo)
        // agrego elemento para descripción 
        let descripcion = document.createElement("p");
        descripcion.setAttribute("class", "card-text")
        let descripcionTexto = producto.descripcion;
        descripcion.innerText = descripcionTexto;
        contieneProductoCard.appendChild(descripcion);
        // agrego categoria del producto 
        let categoria = document.createElement("p");
        let categoriaTexto = producto.categoria;
        categoria.innerText = categoriaTexto;
        contieneProductoCard.appendChild(categoria);
        // agrego precio del producto 
        let precio = document.createElement("p");
        precio.innerHTML = `$ ${producto.precio}`;
        precio.setAttribute("class", "fw-bold");
        contieneProductoCard.appendChild(precio);

        // agrego botton de agregar al carrito con un id para tener el producto. 
        let buttonAgregar = document.createElement("button");
        buttonAgregar.innerHTML = "Agregar al Carrito"
        contieneProductoCard.appendChild(buttonAgregar);
        buttonAgregar.setAttribute("class", "btn btn-primary")
        buttonAgregar.setAttribute("id", `${producto.id}`)
        
         // escucho el click de agregar el producto y le paso la funcion agregar con el id del producto
        buttonAgregar.addEventListener("click", ()=> {
            agregar(producto.id)
        } ); 
        
        
    });
    
}
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

let contador=document.getElementById("contadorCarrito");
contador.innerHTML=carrito.length

// funcion de agregar el producto al carrito con parametro el id del producto 

function agregarItemCarrito(prodId) {
    carrito.forEach(item => {
        if (item.id === prodId){
            item.cantidad++
            contador.innerHTML=carrito.length

        }
        
    });
    
    contador.innerHTML=carrito.length

actualizarCarrito()
    
}

function agregar(prodId) {

    //verificar si ya existe el producto en carrito
    let prodExistente = carrito.some (prod => prod.id === prodId) 
    if (prodExistente) {

        // iteramos sobre el carrito y determinamos si ya está el id cargado, usamos acumulador uno en uno para subir la cantidad 

        let item = carrito.map (item => { 
            if (item.id === prodId){
                item.cantidad++
            }
           
        })
        contador.innerHTML=carrito.length

        
    } else {

        // si no está el producto en el carrito, para lo cual buscamos por id, y lo pusheamos a carrito. 

        let item = productos.find((prod)=>prod.id===prodId)

        // pusheando el item que no estaba al carrito. 
        carrito.push(item);
        contador.innerHTML=carrito.length

    }

    
    // funcion de actualizar el carrito con lo que tiene el array carrito en este momento.  
  
    actualizarCarrito()
    contador.innerHTML=carrito.length


}



// funcion actualizar el carrito y pintarlo con html dinámico. 

function actualizarCarrito(item) {
    
   
   
    infoCarrito.innerHTML="";
    
    carrito.forEach(element => {

    infoCarrito;
    let div = document.createElement("div")
    div.setAttribute("class","card m-1  p-1")
    let info=document.createElement("p")
    let nombreProducto=document.createElement("p");
    let imagen = document.createElement("img");
    // le paso atributo con la ruta src
    imagen.setAttribute("src", `${element.img}`);
    // imagen.setAttribute("width", "50px")
    
    let precioProducto=document.createElement("p");
    let divDos = document.createElement("div");
    divDos.setAttribute("class", "fw-bold")
    let cantidadProducto= document.createElement("span");
    cantidadProducto.innerHTML=`Cantidad: ${element.cantidad}`;
    let buttonMas=document.createElement("button");
    let buttonMenos=document.createElement("button");
    let buttonEliminar=document.createElement("button");
    buttonMas.innerHTML="+";
    buttonMas.setAttribute("class", "btn btn-success m-1")
    buttonEliminar.innerHTML="Eliminar";
    buttonEliminar.setAttribute("class", "btn btn-danger m-1")
    buttonMenos.innerHTML="-";
    buttonMenos.setAttribute("class", "btn btn-danger m-1")
    nombreProducto.innerHTML=`Producto: ${element.nombre}`;
    info.innerHTML= `id ${element.id}`;
    info.setAttribute("class", "d-none")
    precioProducto.innerHTML=`Precio $ ${element.precio}`;
    div.appendChild(info)
    div.appendChild(nombreProducto) 
    div.appendChild(imagen)
    div.appendChild(precioProducto) 
    divDos.appendChild(cantidadProducto)
    divDos.appendChild(buttonMas);
    divDos.appendChild(buttonMenos);
    divDos.appendChild(buttonEliminar);
    buttonEliminar.setAttribute("id", `${element.id}`)
    buttonMenos.setAttribute("id", `${element.id}`)
    buttonMas.setAttribute("id", `${element.id}`)
    div.appendChild(divDos)
    infoCarrito.appendChild(div)
    buttonEliminar.addEventListener("click", eliminar);
  
    buttonMas.addEventListener("click", ()=> {
        agregarItemCarrito(element.id)
    } ); 

    buttonMenos.addEventListener("click", ()=> {
        quitarItemCarrito(element.id)
    } ); 
    
    });

    vaciarCart=document.getElementById("vaciar-carrito");
    vaciarCart.addEventListener("click",  ()=> {
        vaciarCarrito()
    } ); 
    
    // seteo productos para incoporarlos al localstorage
    
    localStorage.setItem('carrito', JSON.stringify(carrito))


    contador.innerHTML=carrito.length

    

   // llamamos a la función que suma el total del carrito 
carritoTotal();
    
}




function eliminar(prodId) {
    // traemos el eliminar creado dinámicamente y con un addEventListener 
    // buscamos el producto por id
    let item = carrito.find((prod)=>prod.id===prodId)
    // identificamos el producto que el usuario quiere borrar y buscamos su index
    let indice = carrito.indexOf(item);
    // con el método splice al array carrito ya sabiendo el index, le pasamos su index, y la cantidad de elementos que queremos borrar que es 1. 

    carrito.splice(indice,1);
   
    // actualizamos el carrito nuevamente, lo que hace recorre el array y crea el html. 

    actualizarCarrito()
    contador.innerHTML=carrito.length

    

}

function quitarItemCarrito(prodId) {
   

    let prodExistente = carrito.some (prod => prod.id === prodId) 
    
    if (prodExistente) {

        // iteramos sobre el carrito y determinamos si ya está el id cargado, usamos acumulador uno en uno para subir la cantidad 

        let item = carrito.map (item => { 
            if (item.id === prodId){
                item.cantidad--
                contador.innerHTML=carrito.length

            } 

            if (item.cantidad === 0) {
                let indice = carrito.indexOf(item);
                carrito.splice(indice,1);
                contador.innerHTML=carrito.length

                return

            }
        })

        console.log(carrito)

        actualizarCarrito()
        contador.innerHTML=carrito.length


    
}
 }



function carritoTotal(){
    
    // inicializamos una variable total con 0;
    let total = 0;
    // obtenemos el elemento del total del html. 
    let itemCartTotal= document.getElementById("precioTotal");
    // recorremos el carrito 
    carrito.forEach((item) => {
        // le decimos que nos remplace el $ por un string vacío 
        var precio = Number(item.precio.replace("Precio total: $", ""))
        // multiplicamos precio con cantidad 
        total = total + precio*item.cantidad;
        total.toFixed(2);
    })
    // imprimimos el total con su variable ya actualizada. 
    
    itemCartTotal.innerHTML = `total $ ${total}`
    itemCartTotal.setAttribute("class", "fs-3")
    contador.innerHTML=carrito.length

   
}

function vaciarCarrito() {
    carrito=[]
    actualizarCarrito()
    contador.innerHTML=carrito.length


}


























    
   
    
    
    

       
    

    





    


    

    


    
  

    
        
   
        
      




