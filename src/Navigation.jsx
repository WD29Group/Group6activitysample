import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {  MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBNavbarBrand, MDBCollapse } from 'mdb-react-ui-kit';

function Navigation({ children }) {
      const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    return (
        <>
        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Group #6</MDBNavbarBrand>
            <MDBNavbarToggler
                type='button'
                data-target='#navbarColor02'
                aria-controls='navbarColor02'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavColorSecond(!showNavColorSecond)}
            >
                <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
                <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                    <MDBNavbarNav className='me-auto ml-auto mb-2 mb-lg-0 text-rightnav d-flex justify-content-end'>
                        <MDBNavbarItem>
                                <Link to="/" className="navButton nvbtn"> <MDBNavbarLink>Home</MDBNavbarLink> </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                                <Link to="/About" className="navButton nvbtn"> <MDBNavbarLink>About</MDBNavbarLink> </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                                <Link to="/Contacts" className="navButton nvbtn"> <MDBNavbarLink>Contacts</MDBNavbarLink> </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
            </MDBNavbar>
            <div className="setpage">
                {children}
            <footer>
                WD29 - Group #6
            </footer>
            </div>
        </>
    )
}
export default Navigation;

