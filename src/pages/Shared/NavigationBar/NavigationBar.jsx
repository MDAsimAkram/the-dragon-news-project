import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    // header er moddhe user tak show korbo...
    const { user , logOut } = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }

    return (
        <Container>
            {/* Header.jsx theke Navbar to Navbar  cut kore anlam */}


            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    {/* Navbar.Brand  ta lagbe na tai feledilam */}

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mx-auto">


                            <Link to='/category/0'> Home</Link>

                            <Nav.Link href="#pricing"> About</Nav.Link>
                            <Nav.Link href="#pricing"> Career </Nav.Link>

                            {/* NavDropdown ta lagbe na tai fele dilam */}

                        </Nav>
                        <Nav>
                            {/* user thakle user profile er akta icon tak dekhabo */}

                            {user &&

                                <FaUserCircle style={{ fontSize: '2rem' }}> </FaUserCircle>
                            }

                            {/* <Nav.Link eventKey={2} href="#memes"> ....atar dorker nai..karon Nav.Link akta angkor ar tar moddhe Link arekta angkor ..so akta angkorer moddhe arekta angkor dile html confused hoye jai tai warning dicche.. */}

                            {/* user thakle user tak logout dekhabo ..ar user login na thakle user k login korte pathabo login page a tai link dicchi */}
                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">LogOut</Button> :
                                <Link to='/login'>  <Button variant="secondary">LogIn</Button> </Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;