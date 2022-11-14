import React, { useState } from "react";

let url = "http://localhost:5000"
export function Carrito (props){
    let comprar = () => {
        alert("Compra realizada")
        console.log(props)
        fetch('/comprar', {
            method:"post",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(props)
        })
        .then(resp => resp.text())
        .then(data => {
            window.location.href="/home"
        })        
    }
    return(
        <div>
            <h1> Productos agregados al carrito </h1>
            <hr />
            {props.carrito.map(elem => {
                return(
                    <div> 
                        <strong>{elem.nombre}</strong>
                        <hr />
                    </div>                    
                )                
            } )}
            <button type="button" class="btn btn-primary" onClick={comprar}> Comprar </button>
        </div>
    )
}