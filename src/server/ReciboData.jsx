const API_URL = "http://localhost:8080/api/recibos";
export async function findByInmuebleId(inmueble){
    const res = await fetch(API_URL+"/"+"6370f7b1419514378f132107");
    const data = res.json();
    return data;
}