import React from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { Button } from "react-bootstrap"
import CartItem from "./CartItem"

export default function Cart () {
    const {cart, cartTotal, clear} = useCart()
    const navegar = useNavigate()
    return (
        <div>
            {
                !cart.length
                ? <div>
                    <h2>Carrito Vacio, ve a comprar!</h2>
                    <Button style={{marginBottom:'20px'}} className="buttonCards" onClick={()=>navegar('/')} variant="secondary"> Ir a Comprar</Button>
                </div>
                : <>  <div>
                        <h3 className="titulo marginTituloCart">Carrito</h3>
                    </div>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    
                    {cart.map((compra) => <CartItem key = {compra.id} compra={compra}/>)}
                    <span>Total: ${cartTotal()}</span>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px'}}>
                        <Button style={{marginRight:'10px'}} className="buttonCards" variant="secondary" onClick={clear}>Vaciar Carrito</Button>
                        <Button variant="success" onClick={()=>navegar('/checkout')}>Terminar Compra</Button>
                    </div>
                    
                </div>
                </>
            }
            
        </div>
    )
}