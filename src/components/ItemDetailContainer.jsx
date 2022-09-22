import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore, collection, doc, getDoc} from "firebase/firestore";

export default function ItemDetailContainer () {

    const[producto, setProducto] =useState({})
    const[cargando,setCargando] = useState(true)
    const{id}=useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const colleccionProds = collection(db, "products")
        const refDoc = doc(colleccionProds, id)
        getDoc(refDoc)
        .then((res)=>{
            setProducto({
                id:res.id,
                ...res.data()
            })
        })
        .catch((err)=>console.log(err))
        .finally(()=>setCargando(false))
    },[id])

    return(
        <div>
            {cargando ? <p>Cargando Detalle...</p>:<ItemDetail producto={producto}/>}
        </div>
    )
}