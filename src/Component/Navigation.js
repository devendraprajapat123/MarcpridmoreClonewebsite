import { Container, Nav, Navbar } from "react-bootstrap";

export function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img src='https://www.marcpridmore.com/wp-content/themes/marc-pridmore/img/mpLogo.png' alt='not found' width="200em"></img></Navbar.Brand><br></br>
                    <Container>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto setmenu" >
                            <Nav.Link href="#features">LEAVING ROOOM</Nav.Link>
                            <Nav.Link href="#pricing">BADROOM</Nav.Link>
                            <Nav.Link href="#pricing">OCCASIONAL</Nav.Link>
                            <Nav.Link href="#pricing">LEATHER</Nav.Link>
                            <Nav.Link href="#pricing">LIGHNIG</Nav.Link>
                            <Nav.Link href="#pricing">HOME OFFICE</Nav.Link>
                            <Nav.Link href="#pricing">DINNING ROOM</Nav.Link>
                            <Nav.Link href="#pricing">ACCESSORIES</Nav.Link>
                            <Nav.Link href="#pricing">OUTDOOR</Nav.Link>
                            <Nav.Link href="#pricing">MEET-MARC</Nav.Link>
                            <Nav.Link href="#pricing">SHOWROOM</Nav.Link>
                            <Nav.Link href="#pricing">DESIGN SERVICES</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                    </Container>
                </Container>
            </Navbar>
        </>
    )

}