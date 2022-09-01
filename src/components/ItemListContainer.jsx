import React, { useState, useEffect } from "react"
import ItemList from "./ItemList";
import "./itemListContainerCss.css"
import imgS7 from "../Img-proyectoReact/S7Tab.png"
import imgS22 from "../Img-proyectoReact/S22.png"
import imgHP from "../Img-proyectoReact/NotebookHP.png"
import imgIphone13 from "../Img-proyectoReact/iphone13.png"

export default function ItemListContainer (){
    const productosStock = [
        {
            "id": 1,
            "nombre": "Samsung Tab S7",
            "precio": 120000,
            "imagen": imgS7,
            "altImg": "Tab S7",
            "titleImg": "Samsung Tab S7"
        },
        {
            "id": 2,
            "nombre": "Celular Samsung S22",
            "precio": 220000,
            "imagen": imgS22,
            "altImg": "Telefono Samsung S22",
            "titleImg": "Samsung S22"
        },
        {
            "id": 3,
            "nombre": "Notebook HP Pavilion 15.7¨",
            "precio": 180000,
            "imagen": imgHP,
            "altImg": "Notebook HP Pavilion",
            "titleImg": "Notebook HP"
        },
        {
            "id": 4,
            "nombre": "Iphone 13 128GB",
            "precio": 350000,
            "imagen": imgIphone13,
            "altImg": "Celular Iphone 13",
            "titleImg": "Iphone 13"
        }
    ]
    
    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando] = useState (true);
    
    useEffect(() => {
        const pedir = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosStock);
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