import {conectarCliente, query, register, autenticacion, updateCarrito, consultarCarrito, updateProductos} from '../dataBase/db.js'
import {conectarAdmin, autenticacionAdmin } from '../dataBase/db2.js'
import { obtenerProductos, buscarProducto } from '../dataBase/db3.js'

export function registrar (req, resp){
    let datos = query(req.body.id, req.body.email)
    .then((data) => {guardar(data)})
    .catch(err => resp.send(err))

    function guardar(data) {
        console.log(data)
        if (data == null) {
            register(req.body)  
            .then(() => resp.send("Usuario guardado exitosamente"))  
        }
        else {
            resp.send("Usuario ya registrado")
        }
    }
}

export let autenticar = (req, resp) => { 
    if(req.body.userType == true){
        conectarCliente()
        let datos = autenticacion(req.body.email, req.body.password)
        .then(data => credenciales(data))
        .catch(err => console.log(err))
    }
    else {
        conectarAdmin()
        let datos = autenticacionAdmin(req.body.email, req.body.password)
        .then(data => credenciales(data))
        .catch(err => console.log(err))
    }     

    function credenciales (data) {
        if (data != null){            
            console.log("Credenciales correctas")
            resp.send(data)
        }
        else {  
            resp.send({id:""})         
            console.log("Credenciales incorrectas")
        }
    }
}

export function getProductos (req, resp){
    obtenerProductos()
    .then(data => {
        resp.send(data)
    })
}

export let addCarrito = (req, resp) => {
    let datos = req.body
    let idUser = datos[datos.length-1]
    let datosCarrito = []    
    for (let i=0; i<datos.length-1; i++) {
        datosCarrito.push(datos[i])
    } 
       
    updateCarrito(idUser, datosCarrito)
    .then(() => resp.send("Productos guardados en el carrito"))
    .catch(err => resp.send("Error"))
}

export let verCarrito = (req, resp) => {
    let datosCarrito = []
    let idUser = req.body.id
    let carrito = consultarCarrito(idUser)
    .then(data => buscarProducto(data))
    .then((datos)=> resp.send(datos))
    .catch((err)=> resp.send({_id:""}))
}

export let comprar = (req, resp) => {
    let datosCarrito = req.body.carrito // array
    let datosProductos = []
    for(let i=0; i<datosCarrito.length; i++){
        datosProductos.push(datosCarrito[i].nombre)
    }
    let idUser = req.body.usuario.id
        
    updateProductos(idUser, datosProductos)
    .then(() => resp.send("Productos guardados en el carrito"))
    .catch(err => resp.send("Error"))
}