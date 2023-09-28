import { Container, Nav,  Navbar } from 'react-bootstrap'

export function Header() {
    return (
        <>
            <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
                <Container className='justify-content-center'>
                    <Navbar.Brand href="#home"><img src='https://www.marcpridmore.com/wp-content/themes/marc-pridmore/img/mpLogo.png' alt='not found' width="200em"></img></Navbar.Brand>
                    {/* <Navbar.Text className='d-flex justify-content-end'><img src='https://www.marcpridmore.com/wp-content/themes/marc-pridmore/img/Combined-Shape.png' alt='not found'></img>
                        <img src='https://www.marcpridmore.com/wp-content/themes/marc-pridmore/img/Cart-icon.png' alt='not found'></img>
                        <img src='https://www.marcpridmore.com/wp-content/themes/marc-pridmore/img/Profile-Icon.png' alt='not found'></img>
                        <img src='https://www.marcpridmore.com/wp-content/uploads/2020/10/Search.png' alt='not found'></img>
                    </Navbar.Text> */}

                    <span className='fav-icon'>

                        <Navbar.Brand href="#home" ></Navbar.Brand>
                        <Navbar.Brand href="#home" ></Navbar.Brand>
                        <Navbar.Brand href="#home" ></Navbar.Brand>
                        <Navbar.Brand href="#home" ></Navbar.Brand>
                    </span>

                </Container>

            </Navbar>
            <Navbar sticky='top' collapseOnSelect expand="lg" className="bg-body-tertiary">

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
            </Navbar>

        </>
    )

}


