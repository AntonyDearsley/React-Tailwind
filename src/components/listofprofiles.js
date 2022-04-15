import React from "react";
import {dataProfiles} from "../services/dataprofiles";
import Profile from "./profile";



export default function ListOfProfiles() {


    return (
        <>
            {dataProfiles.map((data, key) => {
                return (
                    <Profile key={key} src={data.Img} name={data.Name} job={data.Job}/>
                );
            })}
        </>
    );
   

}