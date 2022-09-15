import React from "react"
import { useCart } from "../context/CartContext"

export default function Cart () {
    const {cart} = useCart()
    console.log('carrito', cart)
    return (
        <div>carrito</div>
    )
}