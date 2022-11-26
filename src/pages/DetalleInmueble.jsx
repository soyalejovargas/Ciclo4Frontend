import React, { useState, useEffect } from "react";
import { InmuebleCard } from "../components/InmuebleCard";
import { useParams } from "react-router-dom";
import { findInmuebleById } from "../server/InmueblesData";
import image from "../assets/image1.jpg";

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
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <div>
                    <InmuebleCard imageSource={image} descripcion={inmueble.descripcion} 
                          coeficiente={inmueble.coeficiente} url="" _id={inmueble._id} />
                </div>
            </div>
        </div>
    )
}
export { DetalleInmueble }