import React from "react";


function Button (props) {

    return (

        <button

            type={props.typeOfButton}
            onClick={props.klikEvent}
            disabled={props.onDisabled}
        >
            {props.name}

        </button>
    )
}
export default Button;













//garbage
// import React from "react";
// import './App.css';
//
//
//
// function button ({button}){
//
//     return (
//         <button disabled={true} type="button" onClick={() => console.log({button})}></button>
//     )
//
// }
//
// export default button;


