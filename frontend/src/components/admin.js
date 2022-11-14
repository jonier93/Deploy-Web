import React from 'react'

export function Admin () {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Administrador</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#"> Lista productos </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> Modificar productos </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> Lista ventas </a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}