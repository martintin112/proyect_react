import React, { useState, useEffect } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#inicio">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#empresa">Empresa</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <Nav.Link href="#carrito">🛒{0}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}