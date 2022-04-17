import React from "react";

export default function Tittle(props) {
    const tittle = props.tittle;
    const desc = props.desc;

    return <div className=" flex flex-col text-justify h-full max-w-xs py-3">
        <h1 className="tittle">{tittle}</h1>
        <p className="text-secondary">{desc}</p>
    </div>
}