import React from 'react'
import {NavLink,Link} from "react-router-dom"


const Navbar = () => {
  return (
    // <Navbar bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <div>
    <nav class="navbar navbar-expand-lg text-white navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React User</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " exact to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink className="nav-link " exact to="/contact">Contact</NavLink>
        </li>
      </ul>
     
    </div>
    <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
  </div>
</nav>
    </div>
  )
}

export default Navbar
