import React from 'react';
import {Link} from "react-router-dom";


function NavBar() {
  return (
    
   

    <nav className="nav" >
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/product">Product</Link>
    
</nav>
    
  );
}

export default NavBar;