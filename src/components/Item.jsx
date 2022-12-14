import React from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./itemCss.css"


export default function ItemList ({producto}) {

    const navegar = useNavigate()
    return (
        <div className="separacionCards">
            <Card style={{ width: '18rem' }}>
            <Card.Img className="bordeImg marginImg" variant="top" src={producto.imagen} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Button className="buttonCards" variant="secondary" onClick={()=>navegar(`/detalle/${producto.id}`)}>Detalles y Compra</Button>
            </Card.Body>
            </Card>
            </div>
    )
}