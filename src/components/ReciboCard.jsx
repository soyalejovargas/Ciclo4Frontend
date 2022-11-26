import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/card.css";

function ReciboCard({ imageSource, mes, fechaLimite, tarifa, total}) {
  return (
    <div>
      <h1>Detalle de pago</h1>
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="card-body text-light">
        <div>
            <p>Mes a pagar</p>
            <h5 className="card-title">{mes}</h5>
        </div>
        <br/>
        <div>
            <p>Fecha limite de pago</p>
            <h5 className="card-title">{fechaLimite}</h5>
        </div>
        <br/>
        <div>
            <p>Tarifa</p>
            <h5 className="card-title">{tarifa}</h5>
        </div>
        <br/>
        <div>
            <p>Total a pagar</p>
            <h5 className="card-title">{total}</h5>
        </div>
      </div>
    </div>
    </div>
    
  );
}


export {ReciboCard}