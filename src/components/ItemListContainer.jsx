import React, { useState, useEffect } from "react"
import ItemList from "./ItemList";
import "./itemListContainerCss.css"
import { data } from "./ProductosLista";

export default function ItemListContainer (){
    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando] = useState (true);
    
    useEffect(() => {
        const pedir = new Promise((res, rej) => {
            setTimeout(() => {
                res(data);
            }, 2000);
        });
        pedir.then((resultado) => {
            setProductos(resultado);
            setCargando(false);
        });
        pedir.catch((error) => {
            alert("No se pudo realizar la accion")
        })
    }, []);

    if(cargando) {
        return <p className="texto">CARGANDO...🔄</p>;
    } else {
        return <ItemList productos={productos}/>
    };
}