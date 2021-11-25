import React from "react";
import MyGridItem from "./myGridItem";
import "./myGridCSS.css";
import diStefano from"./DiStefano,0.jpg";
import Maradona from"./maradona.jpg";
import Munitis from"./munitis.jpg";
import Redondo from"./redondo.jpg";

function MyGridCSS() {
    return(
    <div className="gridCSS">
        
            <MyGridItem image={diStefano} nombre="Di Stefano" position="Striker" />
            <MyGridItem image={Redondo} nombre="Fernando Redondo" position="Midfielder"/>
            <MyGridItem image={Munitis} nombre="Pedro Munitis" position="Striker"/>
            <MyGridItem image={Maradona} nombre="Maradona" position="Striker"/>
        
    </div>
    )
}

export default MyGridCSS;