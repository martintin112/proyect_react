import React, { useState, useEffect } from "react"
import Item from "./Item";
import "./ItemListCss.css"

export default function ItemList ({productos}) {
    return (
        <div className="flex margin">
            {productos.map((producto) => {
                return <Item key={producto.id} producto={producto} />
            })}
        </div>
    )
}