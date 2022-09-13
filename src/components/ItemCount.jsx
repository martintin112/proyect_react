import React from "react"
import { Button} from "react-bootstrap"


export default function ItemCount({start, stock, contador, setContador, onAdd}) {

    return (
        <>
        
            <div className="flexDefault containerButtoms">
                <Button className="botones" variant="danger" onClick={()=> (contador===0) ? setContador(start) : setContador(contador - 1)}>-</Button>
                <div>
                <p>Total: {contador}</p>
                <p><b>Stock: {stock}</b></p>
                </div>
                <Button className="botones" variant="info" onClick={()=>(contador===stock) ? setContador(stock) : setContador(contador + 1)}>+</Button>
            </div>
            <div>
            <Button variant="success" onClick={onAdd} >Agregar</Button>
            </div>
            
        
        </>
    )
}