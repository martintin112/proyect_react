import React, { useState, useEffect } from "react"

export default function ItemListContainer({color, fondo, saludo}) {
    return (
        <div style={fondo}>
            <h1 style={color}>{saludo}</h1>
        </div>
        
    )
}