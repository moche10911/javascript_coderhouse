let carrito = []
let contenedor = document.getElementById("misprods")
//Esta funcion renderiza y anade funcion a los eventos de los botones de las cartas para los productos
function renderizarproductos() {
    for (const galleta of galletas) {
        contenedor.innerHTML += `
        <div class="card col-sm-3" style="width: 18rem;">
            <img src="${galleta.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${galleta.nombre}</h5>
                    <p class="card-text">El precio es: ${galleta.precio}</p>
                    <button id="btn${galleta.id}" href="#" class="btn btn-primary">Comprar</button>
                </div>
        </div>
        `;
    }
    //Eventos
    for(let galleta of galletas){
        document.getElementById(`btn${galleta.id}`).addEventListener("click", function (){
            agregarAlCarrito(galleta)
            localStorage.setItem("carritoUsuario",JSON.stringify(carrito))
        })
    }
}
function agregarAlCarrito(galletaComp){
    carrito.push(galletaComp)
    console.table(carrito)
    document.getElementById("tablaboddy").innerHTML +=`
        <tr>
            <td>${galletaComp.id}</td>
            <td>${galletaComp.nombre}</td>
            <td>${galletaComp.precio}</td>
        </tr>
    `;
    let totalCarrito = carrito.reduce((acummulador, producto)=>acummulador + producto.precio, 0)
    document.getElementById("total").innerText="Total a pagar: $"+totalCarrito
}
renderizarproductos()