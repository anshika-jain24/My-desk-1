import React from 'react'
import LogoutHooks from '../page-components/Auth/LogoutHooks'
import {Navbar, Nav} from 'react-bootstrap'

function NavbarComponenet() {
    const d = new Date();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="transparant" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Item style={{fontSize: '20px', color: 'black', marginRight: '20px', marginTop: '4px'}}>{`${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</Nav.Item>
                    <Nav.Link href="/groupstudying" style={{marginTop: '6px', color: 'black', fontSize: '18px', marginTop: '1px', marginRight: '10px'}}>
                    Group Study
                    </Nav.Link>
                    <Nav.Item style={{marginTop: '6px'}}>
                    <LogoutHooks />
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarComponenet
