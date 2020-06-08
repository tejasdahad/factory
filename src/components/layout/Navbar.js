import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue">
                    <Link to="/" className="brand-logo">Laddha Agro Plast Industries</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
