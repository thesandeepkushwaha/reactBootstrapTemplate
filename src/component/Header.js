import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbarCustom">
                    <Container>
                        <Navbar.Brand href="#home">
                            
                            <img class="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo"></img>
                        
                            {/* {' React Bootstrap'} */}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto ">
                                <Nav.Link href="#features" className="text-light">HOME</Nav.Link>
                                <Nav.Link href="#pricing" className="text-light">FEATURES</Nav.Link>
                                <Nav.Link href="#pricing" className="text-light">WHY US?</Nav.Link>
                                <Nav.Link href="#pricing" className="text-light">DESCRIBE</Nav.Link>
                                <Nav.Link href="#pricing" className="text-light">SERVICES</Nav.Link>
                                <Nav.Link href="#pricing" className="text-light">SCREENSHOTS</Nav.Link>
                                <Nav.Link href="#pricing" className="text-light">DOWNLOAD</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        )
    }
}
export default Header;