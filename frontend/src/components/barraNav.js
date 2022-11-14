import React, { Component } from "react";
import '../styles/styleBarra.css'
import { Inicio } from "./inicio";
import { Login } from "./login";
import { Register } from "./register";
import { Contact} from './contact'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Cliente } from "./cliente";
import { Carrito } from "./carrito";
import { Productos } from "./productos";


class BarraNav extends Component {  
    /*constructor(){
        super()
        this.state = {vista:<Inicio/> }
    }    
    render(){  
        let iniciar = () => {
            this.setState({vista:<Inicio />})           
        } 
        let logear = () => {
            this.setState({vista:<Login/>})
        }
        let registrar = () => {
            this.setState({vista:<Register/>})
        }
        let contactar = () => {
            this.setState({vista:<Contact />})
        }
              
        return(
            <div>
                <div className="blockBarra"> 
                    <button className="btnBarra" onClick={iniciar}> Inicio </button>
                    <button className="btnBarra" onClick={logear}> Login </button>
                    <button className="btnBarra" onClick={registrar}> Register </button>
                    <button className="btnBarra" onClick={contactar}> Contact </button>
                </div>  
                {this.state.vista}
            </div>          
        )
    }*/
    render(){
        return(
            <BrowserRouter>
            <div className="blockBrowser">
                <Link to="/home" className="link"> Inicio </Link>
                <Link to="/login" className="link"> Login </Link>
                <Link to="/register" className="link"> Registrar </Link>
                <Link to="/contactar" className="link"> Contactar </Link>
            </div>
                <Routes>
                    <Route path="/" element={<Inicio/>}></Route>
                    <Route path="/home" element={<Inicio/>}></Route>
                    <Route path="/login" element={<Login/>}> </Route>
                    <Route path="/register" element={<Register/>}> </Route>
                    <Route path="/contactar" element={<Contact />}></Route>
                    <Route path="/cliente" element={<Cliente />}></Route>
                    <Route path="/carrito" element={<Carrito />}></Route>
                    <Route path="/listaProductos" element={<Productos />}></Route>   
                </Routes>                
            </BrowserRouter>
        )
    }    
}

export default BarraNav