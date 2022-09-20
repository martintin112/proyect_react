import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap";

export default function CartItem ({compra}) {
    const {removeItem} = useCart()

    return (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px', width:'100%'}}>
                            <img style={{width:'200px'}} src={compra.imagen} alt={compra.nombre}></img>
                            <p>{compra.nombre}</p>
                            <p>cantidad: {compra.quantity}</p>
                            <p>$ {compra.precio}</p>
                            <Button variant="danger" onClick={()=>removeItem(compra.id)}>x</Button>
                        </div>
    )
}