import React from "react";
import img from '../../assets/lista_tarea.png';
import "./ImgList.css";
function ImgList() {
    return (
        <React.Fragment>
            <h1 className="text">Agrega tus tareas</h1>
            <img className="img-list" src={img} alt="logo" />

        </React.Fragment>
    )
}

export { ImgList };