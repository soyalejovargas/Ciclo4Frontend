import React from "react";
import {TablaInmuebles} from "../components/TablaInmuebles";
import {InmuebleModal} from "../components/InmuebleModal";
function Inmuebles(){
    return(
      <>
      <InmuebleModal/>
      <br></br><br></br>
      <TablaInmuebles/>
      </>
    )
}
export {Inmuebles}