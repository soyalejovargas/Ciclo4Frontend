import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Form } from "react-router-dom";
import { Button } from "bootstrap";
import { findInmuebleById } from "../server/InmueblesData";

function DetalleInmueble() {
    const { id } = useParams();
    const [inmueble, setInmueble] = useState({})

    const getInmueble = async () => {
        try {
            const res = await findInmuebleById(id);
            setInmueble(res)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getInmueble();
    }, [setInmueble])

    return (
       <h1>{inmueble.descripcion}</h1>
    )
}
export { DetalleInmueble }