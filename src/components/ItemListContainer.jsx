import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./itemListContainerCss.css"
import { data } from "./ProductosLista";

export default function ItemListContainer (){
    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando] = useState (true);
    const{categoriaId}=useParams()
    
    useEffect(() => {
        const pedir = new Promise((res, rej) => {
            setTimeout(() => {
                res(data);
            }, 2000);
        });
        pedir.then((resultado) => {
            if(categoriaId){
                setProductos(resultado.filter((item)=>item.categoria === categoriaId))
            }else{
                setProductos(resultado)
            }
            setCargando(false);
        });
        pedir.catch((error) => {
            alert("No se pudo realizar la accion")
        })
    }, [categoriaId]);

    if(cargando) {
        return <p className="texto">CARGANDO...🔄</p>;
    } else {
        return <ItemList productos={productos}/>
    };
}