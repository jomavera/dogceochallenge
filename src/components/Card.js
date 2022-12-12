import React from "react";

export const Card = (props) => {

    const regexp = /(?<=https:\/\/images\.dog\.ceo\/breeds\/)\w+-*\w+/g;
    const regexp2 = /\w+/g;
    
    var raza;

    if (props.imagen) {

        const razaArray = props.imagen.match(regexp)[0].match(regexp2);
        
        if (razaArray.length > 1) {
            raza = <h5 className="card-title"><b>Raza</b>: {razaArray[0]} - <b>Sub Raza</b>: {razaArray[1]}</h5>
        } else {
            raza = <h5 className="card-title"><b>Raza</b>: {razaArray[0]}</h5>
        }
    } else {
        raza = '';
    }

    return (
        <div className="col">
            <div className="ui card m-3">
                <img src={props.imagen} style={{ height: "300px", width: "100%", objectFit: "cover" }} className="card-img-top p-1" alt="..."></img>
                <div className="card-body">
                    {raza}
                </div>
            </div>
        </div>
    );
};