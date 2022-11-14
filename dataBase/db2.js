import mongoose from "mongoose";

export let conectarAdmin = () =>{
    mongoose.connect('mongodb+srv://jonier:jhpd123@clusterjonier.y2vdjdd.mongodb.net/dataBase?retryWrites=true&w=majority')
    .then(console.log("Conectado a Mongo DB Atlas"))
    .catch(err => console.log(err))
}

let structure = mongoose.Schema({
    _id:Number,
    name:String,
    lastname:String,
    email:String,
    password:String,
    job:String
}, {versionKey:false})

let collection = mongoose.model('administradores', structure)

export let autenticacionAdmin = async (correo, contraseña) => {
    let documento = await collection.findOne({$and:[{email:correo},{password:contraseña}]})    
    return documento
}