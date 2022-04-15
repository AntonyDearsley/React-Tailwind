import React from "react";

export default function Tittle(props) {
    const tittle = props.tittle;
    const desc = props.desc;

    return <div>
        <h1>{tittle}</h1>
        <p>{desc}</p>
    </div>
}