import React from "react";
import ListOfProfiles from "./listofprofiles";
import Tittle from "./title";

export default function Card() {
    return <div className="card">
        <Tittle tittle="" desc=""> </Tittle>
        <div className="flex items-center justify-center flex-wrap  max-w-4xl">
            <ListOfProfiles />
        </div>  
    </div>
}