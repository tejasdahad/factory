import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue">
                    <Link to="/" className="brand-logo">Laddha Agro Plast Industries</Link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Products<a className='dropdown-trigger' href='#' data-target='dropdown1'><i className="material-icons">keyboard_arrow_down</i></a></Link></li>
            </ul>
            <ul id='dropdown1' class='dropdown-content' style={{width:200, height:200}}>
                <li><Link to="/drips">Drips</Link></li>
                <li><Link to="/pipes">Pipes</Link></li>
                <li><Link to="/agriproducts">Agricultural Products</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
