import React, { Component } from 'react'
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
  DropdownItem } from 'reactstrap';

class Navigation extends Component {
  constructor() {
    super()
    // this.toggle = this.toggle.bind(this);
    this.state = {

    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
render() {

    return (
<Navbar color="light" light expand="md">
<NavbarBrand href="/">BucketList</NavbarBrand>
<NavbarToggler onClick={this.toggle} />
<Collapse isOpen={this.state.isOpen} navbar>
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
    </NavItem>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Options
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          Option 1
        </DropdownItem>
        <DropdownItem>
          Option 2
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          Reset
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>
</Collapse>
</Navbar>
    )
}
}

export default Navigation
