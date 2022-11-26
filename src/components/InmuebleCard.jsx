import React from "react";
import { Link } from "react-router-dom";

import "../styles/card.css";

function InmuebleCard({ imageSource, descripcion, coeficiente, url, _id }) {
  return (
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <div>
            <p>Tipo de inmueble</p>
            <h5 className="card-title">{descripcion}</h5>
          </div>
          <br />
          <div>
            <p>Coeficiente de cobro</p>
            <h5 className="card-title">{coeficiente}</h5>
          </div>
          <br />
          <button>
            <Link to={`/facturas/${_id}`}>Ver recibo de pago</Link>
          </button>

        </div>
      </div>

  );
}


export { InmuebleCard }