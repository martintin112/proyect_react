import React, { useState, useEffect } from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import CartWidget from "./CartWidget"

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="containerMargin">
                <Navbar.Brand href="#inicio">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="navFlex" id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#empresa">Empresa</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}