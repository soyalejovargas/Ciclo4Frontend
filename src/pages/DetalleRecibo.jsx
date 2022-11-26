import React, { useState, useEffect } from "react";
import { ReciboCard } from "../components/ReciboCard";
import { useParams } from "react-router-dom";
import { findByInmuebleId } from "../server/ReciboData";
import image from "../assets/image1.jpg";

function DetalleRecibo() {
    const { id } = useParams();
    const [recibo, setRecibo] = useState({})

    const getRecibo = async () => {
        try {
            const res = await findByInmuebleId(id);
            setRecibo(res)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRecibo();
    }, [setRecibo])

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <div>
                    <ReciboCard imageSource={image} mes={recibo.mes} 
                          fechaLimite={recibo.fechaLimite} tarifa={recibo.tarifa} total={recibo.total}/>
                </div>
            </div>
        </div>
    )
}
export { DetalleRecibo }