import React from "react";
import paisaje2 from "../assets/fondopanel.png"

const PanelAdmin = () => {

    return(
        <div className="panelAdmin">
            <h2>Bienvenido al panel administrador</h2>

            <p>Desde aca podras administrar las funcionalidades del sitio.</p>

            <div className="listaLink">
                <a href="/JudgeCreate">Crear Juego</a>
                <a href="/JudgeUpdate"> Modificar juego</a>
                <a href="/UserCreate">Crear usuario</a>
                <a href="/UserUpdate">Modificar usuario</a>
                <a href="/UserDelete">Eliminar usuario</a>
            </div>
        </div>
    )
}

export default PanelAdmin;