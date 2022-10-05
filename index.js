let p1 = 14000
let p2 = 24500
let p3 =28500
function listaArt(){
    console.log("El precio del articulo #1 es "+p1)
    console.log("El precio del articulo #2 es "+p2)
    console.log("El precio del articulo #3 es "+p3)
}
listaArt()
let articulo =parseInt(prompt("Que articulo desea llevarse?(Solo escoger por numero)"))

let total = 0
while(articulo != "salir"){
    if(articulo == 1){
        let resp=prompt("Su producto cuesta $"+p1+" Desea anadirlo al carrito?(si o no)")
        if(resp == "si"){
            total = total+p1
            console.log("El total de su carrito actualmente es de $"+total)
            
        }if(resp == "no"){
            console.log("El total de su carrito actualmente es de $"+total)
            
        }
    }
    if(articulo == 2){
        let resp=prompt("Su producto cuesta $"+p2+" Desea anadirlo al carrito?(si o no)")
        if(resp == "si"){
            total = total+p2
            console.log("El total de su carrito actualmente es de $"+total)
            
        }if(resp == "no"){
            console.log("El total de su carrito actualmente es de $"+total)
            
        }
    }
    if(articulo == 3){
        let resp=prompt("Su producto cuesta $"+p3+" Desea anadirlo al carrito?(si o no)")
        if(resp == "si"){
            total = total+p3
            console.log("El total de su carrito actualmente es de $"+total)
            
        }if(resp == "no"){
            console.log("El total de su carrito actualmente es de $"+total)
        }
    }
    articulo = prompt("Que otro articulo quiere anadir a su carrito? (Ingrese salir para no preguntarle mas)")
}

console.log("El total de su carrito es de $"+total)

function ivaCalc(num){
    let iva = 0.17
    return num*(iva+1)
}
alert("Su total a pagar es de "+ivaCalc(total)+" con el iva incluido.")