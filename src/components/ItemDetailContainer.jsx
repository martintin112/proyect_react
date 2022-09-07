import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { data } from "./ProductosLista";

export default function ItemDetailContainer () {

    const[producto, setProducto] =useState({})
    const[cargando,setCargando] = useState(true)
    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                res(data);
            }, 2000);
        });
        getItem.then((resultado)=>{
            setProducto(resultado.find((item)=> item.id === 4))
        });
        getItem.catch((error) => {
            alert("No se pudo realizar la accion")
        })
        .finally(()=>setCargando(false))
    }),[];

    return(
        <div>
            {cargando ? <p>Cargando Detalle...</p>:<ItemDetail producto={producto}/>}
        </div>
    )
}