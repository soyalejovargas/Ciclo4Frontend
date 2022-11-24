const API_URL = "http://localhost:8080/api/inmuebles";
export async function loadInmuebles(){
    const res = await fetch(API_URL);
    const data = res.json();
    return data;
}

export async function findInmuebleById(id){
    const res = await fetch(API_URL+"/"+id);
    const data = res.json();
    return data;
}