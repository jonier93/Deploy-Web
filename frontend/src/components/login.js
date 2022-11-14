import React, {useState} from 'react'
import '../styles/styleLogin.css'
import { Admin } from './admin'
import { Cliente } from './cliente'

let url = "http://localhost:5000"

export function Login (){ 
    let datosLogin = <div class="container-fluid">                
                        <div class="row">
                            <div class="col"> </div>
                            <div class="col" id="colPers"> 
                                <img id="imagenLogin" src='https://www.aliwell.mx/imagenes/registro/icono_sesion.png'></img> 
                                <div class="row">
                                    <div class="col">
                                        <label> Email </label>
                                    </div>
                                    <div class="col">
                                        <input type="email" id="emailCred" placeholder='Ingrese su correo' ></input>
                                    </div>                            
                                </div> 
                                <div class="row"> &nbsp; </div>
                                <div class="row">
                                    <div class="col">
                                        <label> Contraseña </label>
                                    </div>
                                    <div class="col">
                                        <input type="text" id='passwordCred' placeholder='Ingrese su contraseña'></input>
                                    </div>                            
                                </div>
                                <div class="row"> &nbsp; </div>
                                <input type="radio" id="cliente" value="Cliente" name="grupoRadio" defaultChecked></input>
                                <label for="Cliente"> Cliente </label> &nbsp; &nbsp;
                                <input type="radio" id="admin" value="Admin" name="grupoRadio"></input>
                                <label for="Admin"> Admin </label>
                                <br/> <br/>
                                <button type='button' onClick={autenticar} class="btn btn-primary btn-lg"> Logear </button>
                            </div>
                            <div class="col"> </div>
                        </div>
                    </div>
                     
    let [estado, setEstado] = useState(datosLogin)
    
    function autenticar(){
        let cliente = document.getElementById('cliente').checked
        let datos = {
            email: document.getElementById('emailCred').value,
            password: document.getElementById('passwordCred').value,
            userType:cliente
        }  
        fetch('/autenticacion', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(datos)
        })
        .then(res => res.json())
        .then(data => { 
            if (data.id != ""){
                if (cliente == true){
                    setEstado(estado = <Cliente mess={data}/>)
                }
                else {
                    setEstado(estado = <Admin/> )
                }                
            }
            else (
                alert("Usuario y/o contraseña incorrecta")
            )        
        })
    }
    return(
        <div>
            {estado}         
        </div>        
    )
}
