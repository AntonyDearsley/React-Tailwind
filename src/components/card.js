import React from "react";
import ListOfProfiles from "./listofprofiles";
import Tittle from "./title";

export default function Card() {
    return <div className="card">
        <Tittle tittle="Meet out leadership" desc="Libero fames augue nisl porttitor nisi,quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla."> </Tittle>
        <div className="flex items-center justify-center flex-wrap  max-w-4xl">
            <ListOfProfiles />
        </div>  
    </div>
}