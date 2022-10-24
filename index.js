const productos = [
    {id: 1, nombre: "producto 1", precio: 85000},
    {id: 2, nombre: "producto 2", precio: 76500},
    {id: 3, nombre: "producto 3", precio: 120000},
    {id: 4, nombre: "producto 4", precio: 132000},
]
function listaArt(){
    console.log("El precio de "+productos[0].nombre+" es $"+productos[0].precio)
    console.log("El precio de "+productos[1].nombre+" es $"+productos[1].precio)
    console.log("El precio de "+productos[2].nombre+" es $"+productos[2].precio)
    console.log("El precio de "+productos[3].nombre+" es $"+productos[3].precio)
}
listaArt()
let articulo =prompt("Que articulo desea llevarse?(Solo escoger por numero)")
let carrito =[]
let total = 0
while(articulo != "salir"){
    if(articulo == 1){
        let resp=prompt("Su producto cuesta $"+productos[0].precio+" Desea anadirlo al carrito?(si o no)")
        if(resp == "si"){
            carrito.push(productos[0].precio)
            total = total+productos[0].precio
            console.log("El total de su carrito actualmente es de $"+total)
        }if(resp == "no"){
            console.log("El total de su carrito actualmente es de $"+total)
        }
    }
    if(articulo == 2){
        let resp=prompt("Su producto cuesta $"+productos[1].precio+" Desea anadirlo al carrito?(si o no)")
        if(resp == "si"){
            carrito.push(productos[1].precio)
            total = total+productos[1].precio
            console.log("El total de su carrito actualmente es de $"+total)
        }if(resp == "no"){
            console.log("El total de su carrito actualmente es de $"+total)
        }
    }
    if(articulo == 3){
        let resp=prompt("Su producto cuesta $"+productos[2].precio+" Desea anadirlo al carrito?(si o no)")
        if(resp == "si"){
            carrito.push(productos[2].precio)
            total = total+productos[2].precio
            console.log("El total de su carrito actualmente es de $"+total)
        }if(resp == "no"){
            console.log("El total de su carrito actualmente es de $"+total)
        }
    }
    if(articulo == 4){
        let resp=prompt("Su producto cuesta $"+productos[3].precio+" Desea anadirlo al carrito?(si o no)")
        if(resp == "si"){
            carrito.push(productos[3].precio)
            total = total+productos[3].precio
            console.log("El total de su carrito actualmente es de $"+total)
        }if(resp == "no"){
            console.log("El total de su carrito actualmente es de $"+total)
        }
    }
    articulo = prompt("Que otro articulo quiere anadir a su carrito? (Ingrese salir para no preguntarle mas)")
}
let verTotal = carrito.reduce((suma,precio) => suma + precio,0)
console.log("El total de su carrito es de $"+verTotal)
function ivaCalc(num){
    let iva = 0.17
    return num*(iva+1)
}
console.log(("Su total a pagar es de "+ivaCalc(total)+" con el iva incluido."))