import React, { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import "./itemCss.css"

export default function ItemList ({producto}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img className="bordeImg marginImg" variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Button variant="secondary">Detalles y Compra</Button>
            </Card.Body>
            </Card>
            </div>
    )
}