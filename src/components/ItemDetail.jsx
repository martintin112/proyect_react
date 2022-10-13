import React, { useState } from "react"
import { ListGroup, Card, Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import ItemCount from "./ItemCount"

export default function ItemDetail ({producto}) {
    const estilo = {borderBottom: "solid 1px rgba(0,0,0,0.175)", marginBottom: "5px"}
    const start = 1
    const [contador, setContador] = useState(start)
    const [compra, setCompra]=useState(false)
    const { nombre, precio, stock, imagen, imagen2, id, camara, capacidad, colores} = producto
    const [stockRestante, setStock] = useState(stock)
    const navegar = useNavigate()
    const{addItem} = useCart()

    const onAdd = () => {
        (contador<=stockRestante) ? setStock(stockRestante-contador) : alert("No se puede superar el stock")
        let purchase = {
            id,
            nombre,
            precio,
            stock,
            imagen,
            quantity:contador
        }
        setCompra(true)
        addItem(purchase)
    }

    return(
        <div className="seccionDetalles container-fluid">
            <Card style={{ width: '18rem', marginTop:'20px', marginBottom:'20px' }}>
            <Card.Img style={estilo} variant="top" src={imagen2} />
            <Card.Title>Precio: ${precio}</Card.Title>
            <Card.Header>Caracteristicas:</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item><b>Camara:</b> {camara}</ListGroup.Item>
                <ListGroup.Item><b>Capacidad:</b> {capacidad}</ListGroup.Item>
                <ListGroup.Item><b>Colores:</b> {colores}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {!compra ? <ItemCount start={start} onAdd={onAdd} stock= {stock} contador={contador} setContador={setContador} stockRest={stockRestante} setStock={setStock}/>
                : <div className="flexBtnCount"> 
                    <Button onClick={()=>navegar('/')} variant="success"> Seguir Comprando</Button>
                    <Button onClick={()=>navegar('/cart')} className="marginBtn buttonCards" variant="secondary"> Ir al Carrito</Button>
                </div> }
            </Card.Body>
            </Card>
        </div>
    )
}