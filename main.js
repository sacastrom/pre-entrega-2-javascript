//CREAMOS LA CLASE PRODUCTO

class Producto{
    constructor(plu, nombre, fecha, cantidad, categoria){
        this.plu = plu;
        this.nombre = nombre;
        this.fecha = fecha;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
};

//CREAMOS PRODUCTOS

const snackPalitosPanceta = new Producto (8858223012377, "Snack palitos sabor panceta ahumada 60 gr", "2023-05-13", 3, "Snacks");
const snackPalitosPicante = new Producto (8858283008479, "Snack palitos sabor picante 60 gr", "2023-04-13", 3, "Snacks");
const caramelosBerry = new Producto (4710035230230, "Caramelos masticables Hi-Chew sabor frutos rojos 110 gr", "2023-04-01", 3, "Golosinas");
const lataCaramelos = new Producto (4901630002531, "Lata de caramelos Tumba de Luciérnagas Sakura Drops", "2024-04-24", 3, "Golosinas");

// CREAMOS UN ARRAY CON LOS PRODUCTOS 

const arrayProductos = [snackPalitosPanceta, snackPalitosPicante, caramelosBerry, lataCaramelos];
console.log(arrayProductos);

//CREAMOS UN ARRAY VACÍO PARA ALMACENAR LOS PRODUCTOS SIN STOCK

const arrayProductosSinStock = [];

//MENÚ

function menu(){
    let opcion = parseInt(prompt("Ingrese una opción: 1)Agregar productos nuevos 2)Modificar stock 3)Consultar producto 4)Eliminar producto 5)Vencimientos cercanos 6)Salir"));
    return opcion;
};

//AGREGAR PRODUCTOS

function agregarProductos(){
    let plu = prompt("Ingrese el código plu del producto");
    let nombre = prompt("Ingrese el nombre del producto");
    let fecha = prompt("Ingrese la fecha de vencimiento del producto (aaaa-mm-dd)");
    let cantidad = prompt("Ingrese el stock disponible del producto");
    let categoria = prompt("Ingrese la categoria del producto");
    const producto = new Producto (plu, nombre, fecha, cantidad, categoria);
    arrayProductos.push(producto);
    console.log(arrayProductos);
};
//BUSCAR UN PRODUCTO POR PLU

function buscarProducto(){
    let plu = parseInt(prompt("Ingrese el código plu del producto"));
    let producto = arrayProductos.find(producto => producto.plu === plu);
    console.log(producto);
};

//MODIFICAR STOCK
function modificarStock(){
    let plu = parseInt(prompt("Ingrese el código plu del producto"));
    let producto = arrayProductos.find(producto => producto.plu === plu);
    let indice = arrayProductos.indexOf(producto);
    if(producto){
    let unidades = parseInt(prompt("Ingrese las unidades (- si son unidades vendidas)"));
    producto.cantidad += unidades;
        if(producto.cantidad === 0){
            alert(`Te quedaste sin stock de ${producto.nombre}`);
            arrayProductos.splice(indice,1);
            arrayProductosSinStock.push(producto);
            console.log(arrayProductosSinStock);
        }
    console.log(arrayProductos);
    }else{
     console.log("Producto no encontrado");
    }
};

//ELIMINAR PRODUCTO

function eliminarProducto(){
    let plu = parseInt(prompt("Ingrese el código plu del producto que deseas eliminar"));
    let producto = arrayProductos.find(producto => producto.plu === plu);
    let indice = arrayProductos.indexOf(producto);

    arrayProductos.splice(indice,1);
    console.log(arrayProductos);
};

//CONSULTAR VENCIMIENTOS CERCANOS
function vencimiento(){
   const hoy = new Date();
   const dosMesesDespues = new Date(hoy.getFullYear(), hoy.getMonth()+2, hoy.getDate());
   const vencimientosCercanos = arrayProductos.filter(producto =>{
    const fechaVencimiento = new Date(producto.fecha);
    return fechaVencimiento > hoy && fechaVencimiento <= dosMesesDespues;
   })
   if(vencimientosCercanos.length > 0){
    alert(`Tienes productos próximos a vencer`);
    console.log(vencimientosCercanos);
   }else{
    alert(`No tienes productos próximos a vencer`);
   }
};

//SALIR

function salir(){
    alert("Tu stock de productos está actualizado!!!")
};

//EJECUTAMOS EL PROGRAMA

let opcion = menu();

switch (opcion){
    case 1: agregarProductos();
    break;
    case 2: modificarStock();
    break;
    case 3: buscarProducto();
    break;
    case 4: eliminarProducto();
    break;
    case 5: vencimiento();
    break;
    case 6: salir();
    break;
    default: 
    alert(`Opción no encontrada`);
    break;
};
