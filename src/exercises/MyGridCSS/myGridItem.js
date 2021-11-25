import React from "react";
import "./myGridCSS.css";

function MyGridItem(props) {
    return(
        <div className="gridItem">
            <img className="iconImg" src={props.image} alt="Icon Image"/>  
            <div className="description">   
                <h2 className="name">{props.nombre}</h2>
                <p className="position">{props.position}</p>
            </div>  
        </div>
    )
}

export default MyGridItem;
