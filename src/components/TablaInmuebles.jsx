import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { loadInmuebles } from "../server/InmueblesData";


function TablaInmuebles(){
    const [inmuebles, setInmuebles] = useState([]);

    async function listInmuebles(){
        try {
            const res = await loadInmuebles();
            setInmuebles(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listInmuebles();
    }, [setInmuebles]);

    let contador = 0;

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Descripcion</th>
                    <th>Coeficiente</th>
                    <th>Propietario</th>
                    <th>Detalle</th>
                </tr>
            </thead>
            <tbody>
                {
                    inmuebles.map((inmueble)=>(
                        <tr key={inmueble._id}>
                            <td>{contador++}</td>
                            <td>{inmueble.descripcion}</td>
                            <td>{inmueble.coeficiente}</td>
                            <td>{inmueble.propietario.nombre}</td>
                            <td><Link to={`/inmuebles/${inmueble._id}`}>Ver detalle</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export { TablaInmuebles }