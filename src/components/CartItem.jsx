import React from "react";
import { useCart } from "../context/CartContext";
import { Button, Container, Row, Col} from "react-bootstrap";

export default function CartItem ({compra}) {
    const {removeItem} = useCart()

    return (
        // <div className="container-fluid" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px', width:'100%'}}>
        //     <div className="row">
        //         <div>
        <Container fluid className="division">
            <Row>
                <Col xs={12} md={true} ><img style={{width:'200px'}} src={compra.imagen} alt={compra.nombre}></img></Col>
                <Col className="colCarrito" xs={12} md={true}><p>{compra.nombre}</p></Col>    
                <Col className="colCarrito" xs={12} md={true}><p>cantidad: {compra.quantity}</p></Col>    
                <Col className="colCarrito" xs={12} md={true}><p>$ {compra.precio}</p></Col>    
                <Col className="colCarrito" xs={12} md={true}><Button className="botonEliminar" variant="danger" onClick={()=>removeItem(compra.id)}>x</Button></Col>    
            </Row>
        </Container>
        //         </div>
        //     </div>
        // </div>
    )
}