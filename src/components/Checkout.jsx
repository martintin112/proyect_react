import {getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import {Button, Form} from 'react-bootstrap';
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout () {
    const [comprador, setComprador] = useState({})
    const [orderId, setOrderId] = useState('')
    const [mensaje, setMensaje] = useState(false)
    const [cargando, setCargando] = useState(false)
    const {cart, cartTotal, clear} = useCart()
    const navigate = useNavigate()
    const datosComprador = (e)=>{
        setComprador({
            ...comprador,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
            setMensaje(true)
        }else{
            setMensaje(false)
            setCargando(true)
            const db = getFirestore()
        const ventas = collection(db, "orders")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
        }
    }
    if(cargando) {
        return <p>Cargando...</p>
    }
    return(
        <div>
            {!orderId
                ? <div>
                    <h2>Checkout</h2>
                    <p>Complete sus datos</p>
                    <div>
                        <Form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finalizarCompra}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre y Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su Nombre y Apellido" name="nombre" onChange={datosComprador}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="tel" placeholder="Ingrese su Telefono" name="tel" onChange={datosComprador} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su Email" name="email" onChange={datosComprador} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Enviar</Button>
                            {mensaje && <p>Complete todos sus datos por favor!</p>}
                        </Form>
                    </div>
                </div>
                :
                <div>
                    <h2>Gracias por comprar!</h2>
                    <p>Su orden es: {orderId}</p>
                    <Button variant="secondary" onClick={()=> navigate('/')} >Volver</Button>
                </div>}
        </div>
    )
    
}