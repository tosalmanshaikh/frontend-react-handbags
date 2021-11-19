//option 1
import React from 'react'

function Tile (props) {

    return (

        <section>




            {

            props.image ? <img src={props.image} alt={props.image_name}/> :

                <>
                    <h2>{props.title}</h2>
                    <p>{props.paragraph}</p>
                </>

            }


            {/*// <h2>{props.title}</h2>*/}
            {/*// <p>{props.paragraph}</p>*/}
            {/*// <img src={props.image} alt={props.image_name}/>*/}

        </section>
    );
}

export default Tile;








//option 2
// import React from 'react'
//
// function Tile ({title, paragraph, image, image_name}) {
//     return (
//         <section>
//             <h2>{title}</h2>
//             <p>{paragraph}</p>
//             <img src={image} alt={image_name}/>
//         </section>
//     )
// }
//
// export default Tile;
//

















// function Tile({title, imgtext, image}) {
//     //After every soft return the text is split and stored in the array paragraph
//     const paragraphs = Text().split('\r')
//     // The map method puts each item of the array in a html paragraph item
//     const text = paragraphs.map((paragraph) => {
//         return <p>{paragraph}</p>
//     });
//     if (image) {
//         return <section>
//             <img alt={imgtext} src={image}/>
//         </section>
//     } else {
//         return <section>
//             <h2>{title}</h2>
//             {text}
//         </section>
//     }
//
// }