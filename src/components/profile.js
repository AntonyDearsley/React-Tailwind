import React from "react";
import importAll from "../services/img";

// ../services/img/profilePictures

const images = importAll(require.context('../services/img/profilePictures', false, /\.(png|jpe?g|jpg|svg)$/));

export default function Profile({src, name, job}){
    return <div className="profile">
        <img className="profile-img" alt={images} src={images[src]}/>
        <div className="profile-box">
            <p className="text">{name}</p>
            <p className="text-primary font-semibold">{job}</p>
        </div>
    </div>
}