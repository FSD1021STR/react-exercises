import React from 'react';
import './gridItem.css'

function GridItem(props) {
    console.log(props);
    return (
        <div className="gridItem">
            <h2 className="position">position</h2>
            <p className="name">{props.nombre}</p>
            <p className="position">{props.posicion}</p>
            <p>Precio</p>
            <p>Marca</p>
            <p>Color</p>
        </div>
    )
}

export default GridItem;