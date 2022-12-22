import React from "react";
import App from "./App";


export default function Die(props){
    return (
        <div className="die-face">
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
   
}