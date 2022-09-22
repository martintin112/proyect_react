import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="containerMargin">
                <NavLink className="navbar-brand colorLink" to='/'>Inicio</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="navFlex" id="responsive-navbar-nav">
                    <Nav>
                        <NavLink className="nav-link colorLink" to='/categoria/celulares'>Celulares</NavLink>
                        <NavLink className="nav-link colorLink" to='/categoria/tablets'>Tablets</NavLink>
                        <NavLink className="nav-link colorLink" to='/categoria/notebooks'>Notebooks</NavLink>
                    </Nav>
                    <Nav>
                    <NavLink to='/cart' className="nav-link colorLink" href="#carrito"><CartWidget/></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}