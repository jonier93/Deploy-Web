import mongoose from "mongoose";

let structure = mongoose.Schema({
    nombre:String,
    cantidad:Number,
}, {versionKey:false})

let collection = mongoose.model('productos', structure)

export let obtenerProductos = async (id) => {
    let documento = await collection.find()    
    return documento
}

export let buscarProducto = async (id) => {
    let documento = await collection.find({_id:id})
    return documento
}