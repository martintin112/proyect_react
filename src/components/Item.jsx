import React, { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import ItemCount from "./ItemCount"
import "./itemCss.css"

export default function ItemList ({producto}) {
    const start = 0
    let stock = 15
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img className="bordeImg marginImg" variant="top" src={producto.imagen} />
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>Precio: ${producto.precio}</Card.Text>
            <Card.Body className="borde">
                <ItemCount start={start} stock= {stock} />
            </Card.Body>
            </Card>
            </div>
    )
}