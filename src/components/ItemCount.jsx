import React, { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"


export default function ItemCount({start, stock}) {
    const [contador, setContador] = useState(start)
    const [stockRestante, setStock] = useState(stock)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Producto</Card.Title>
            <div className="flexDefault containerButtoms">
                <Button className="botones" variant="danger" onClick={()=> (contador==0) ? setContador(start) : setContador(contador - 1)}>-</Button>
                <div>
                <p>Total: {contador}</p>
                <p><b>Stock: {stockRestante}</b></p>
                </div>
                <Button className="botones" variant="info" onClick={()=>(contador==stockRestante) ? setContador(stockRestante) : setContador(contador + 1)}>+</Button>
            </div>
            <Button variant="secondary" onClick={()=> {setContador(start); (contador<=stockRestante) ? setStock(stockRestante-contador) : alert("No se puede superar el stock") }} >Agregar</Button>
            </Card.Body>
        </Card>
    )
}