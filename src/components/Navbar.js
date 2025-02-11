import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/stock">Stock</Link></li>
                        <li><Link to="/cart" className="material-icons">shopping_cart</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;