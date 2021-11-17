import React from 'react'

function Tile (props) {

    return (

        <section>

            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <img src={props.image} alt={props.image_name}/>

        </section>

    );
}

export default Tile;