import React, {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';


function NavBar () {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
          <Navbar className="navbar navbar-expand-lg" color="dark">
            <NavbarBrand href="/" style={{ color: 'white' }}>NYC Inspection Results</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem>
                  <NavLink href="/policy" style={{ color: 'white' }}>Food Safety Practices</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/search" style={{ color: 'white' }}>Search Restaurants</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    );
};

export default NavBar;