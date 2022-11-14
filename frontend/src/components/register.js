import React from "react";
import "../styles/styleRegister.css"
let url = "http://localhost:5000"

export function Register(){
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4" id="colPers2">
                    <form>
                    <img className="imagenRegister" src="https://3pkm942y6f9nttcns2xe7cg1-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/document-indexing-icon.png"></img>
                        <div class="form-group">
                            <label> Identificación </label>
                            <input type="number" class="form-control" id="id" aria-describedby="emailHelp" placeholder="Ingrese su Id" />  
                        </div>
                        <div class="form-group">
                            <label> Nombre </label>
                            <input type="text" class="form-control" id="name" placeholder="Ingrese su contraseña" />
                        </div>
                        <div class="form-group">
                            <label> Correo </label>
                            <input type="email" class="form-control" id="email" placeholder="Ingrese su correo" />
                        </div>
                        <div class="form-group">
                            <label> Contraseña </label>
                            <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña" />
                        </div>
                        <button onClick={registrarDatos} type="button" class="btn btn-primary btn-lg" id="btnRegistrar"> Registrar </button>
                    </form>
                </div> 
                <div class="col-4"></div>
            </div> 
        </div>
    )
}

function registrarDatos(){
    let datos = {
        id: document.getElementById('id').value, 
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    
    fetch('/registrar', {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(datos)
    })
    .then(res => res.text())
    .then(data => {
        alert(data)        
        limpiartexto()
    })
}

function limpiartexto() {
    document.getElementById('id').value = ""
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
}