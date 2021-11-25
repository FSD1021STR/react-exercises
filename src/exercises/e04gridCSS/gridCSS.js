import React from 'react';
import './gridCSS.css';
import GridItem from './gridItem';

function GridCSS() {
    return(
        <div className="gridCSS">
             <GridItem nombre="Pedro" posicion="Full Stack" />
             <GridItem nombre="Maria" posicion="Dev Ops" />
        </div>
    );
}

export default GridCSS;