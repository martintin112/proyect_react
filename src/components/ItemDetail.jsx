import React, { useState, useEffect } from "react"
import { ListGroup, Card } from "react-bootstrap"
import ItemCount from "./ItemCount"

export default function ItemDetail ({producto}) {
    const estilo = {borderBottom: "solid 1px rgba(0,0,0,0.175)", marginBottom: "5px"}
    const start = 0
    return(
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img style={estilo} variant="top" src={producto.imagen2} />
            <Card.Title>Precio: {producto.precio}</Card.Title>
            <Card.Header>Caracteristicas:</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item><b>Camara:</b> {producto.camara}</ListGroup.Item>
                <ListGroup.Item><b>Capacidad:</b> {producto.capacidad}</ListGroup.Item>
                <ListGroup.Item><b>Colores:</b> {producto.colores}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <ItemCount start={start} stock= {producto.stock} />
            </Card.Body>
            </Card>
        </div>
    )
}