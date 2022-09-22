import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./itemListContainerCss.css"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

export default function ItemListContainer (){
    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando] = useState (false);
    const{categoriaId}=useParams()
    
useEffect(() => {
    setCargando(true)
    const db = getFirestore()
    const productos = categoriaId ? query(collection(db, "products"), where("categoria", "==", categoriaId)) : collection(db, "products")
    getDocs(productos)
    .then((res)=>{
        const lista = res.docs.map((product)=>{
            return{
                id:product.id,
                ...product.data()
        }
        })
        setProductos(lista)
    })
    .catch((err)=>console.log(err))
    .finally(()=>setCargando(false))
}, [categoriaId])

    if(cargando) {
        return <p className="texto">CARGANDO...🔄</p>;
    } else {
        return <ItemList productos={productos}/>
    };
}