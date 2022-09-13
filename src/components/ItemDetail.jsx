import React, { useState } from "react"
import { ListGroup, Card, Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ItemCount from "./ItemCount"

export default function ItemDetail ({producto}) {
    const estilo = {borderBottom: "solid 1px rgba(0,0,0,0.175)", marginBottom: "5px"}
    const start = 0
    const[compra, setCompra]=useState(false)
    const [contador, setContador] = useState(start)
    const [stockRestante, setStock] = useState(producto.stock)
    const navegar = useNavigate()

    const onAdd = () => {
        (contador<=stockRestante) ? setStock(stockRestante-contador) : alert("No se puede superar el stock")
        console.log(`compraste ${contador} items del producto ${producto.nombre}`)
        setCompra(true)
        
    }

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
                {!compra ? <ItemCount start={start} onAdd={onAdd} stock= {producto.stock} contador={contador} setContador={setContador} stockRest={stockRestante} setStock={setStock}/>
                : <div className="flexBtnCount"> 
                    <Button onClick={()=>navegar('/')} variant="success"> Seguir Comprando</Button>
                    <Button onClick={()=>navegar('/cart')} className="marginBtn" variant="secondary"> Ir al Carrito</Button>
                </div> }
            </Card.Body>
            </Card>
        </div>
    )
}