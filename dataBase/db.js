import mongoose from "mongoose";
import crypto from 'crypto'

export let conectarCliente = () =>{
    mongoose.connect('mongodb+srv://jonier:jhpd123@clusterjonier.y2vdjdd.mongodb.net/dataBase?retryWrites=true&w=majority')
    .then(console.log("Conectado a Mongo DB Atlas"))
    .catch(err => console.log(err))
}

let structure = mongoose.Schema({
    _id:Number,
    name:String,
    email:String,
    password:String,
    products:Array,
    carrito:Array
}, {versionKey:false})

let collection = mongoose.model('usuarios', structure)

export let query = async (id, email) => {
    let document = await collection.findOne({$or:[{_id:id}, {email:email}]})
    return document
}

export let autenticacion = async (email, password) => {
    let passwordCrypto = crypto.createHash("sha512").update(password).digest('hex')
    let document = await collection.findOne({$and:[{email:email}, {password:passwordCrypto}]})
    return document
}

export let register = async (datos) => {
    let passwordCrypto = crypto.createHash("sha512").update(datos.password).digest('hex')
    let document = new collection({
        _id:datos.id,
        name:datos.name,
        email:datos.email,
        password:passwordCrypto,
        products:"",
        carrito:""
    })    
    await document.save()
}

export let updateCarrito = async(idUser, datosCarrito) => {
    await collection.updateOne({_id:idUser}, {
        $set:{
            carrito:datosCarrito
        }
    })
}

export let consultarCarrito = async(idUser) => {
    let documentos = await collection.findById(idUser)
    return documentos.carrito
}

export let updateProductos = async(idUser, datosCarrito) => {
    
    await collection.updateOne({_id:idUser}, {
        $set:{
            products:datosCarrito,
            carrito:""
        }
    })
}

/*
setTimeout(() => {
    mongoose.connection.close(function () {
        console.log('Conexión a MongoDB Cerrada');
      });    
}, 2000);
*/
