import React from 'react';
import './gridCSS.css';

function GridCSS() {
    return(
        <div className="gridCSS">
            <gridItem img="img01.jpg" name="Sergio" position="{position}" linkedInURL="http://www.linkedin.com/in/jgalobart" />
            <gridItem img="img02.jpg" name="Jordi" position="{position}" />
            <gridItem img="{url}" name="{name}" position="{position}" />
            <gridItem img="{url}" name="{name}" position="{position}" />
            <gridItem img="{url}" name="{name}" position="{position}" />
            <gridItem img="{url}" name="{name}" position="{position}" />
        </div>
    );
}

export default GridCSS;