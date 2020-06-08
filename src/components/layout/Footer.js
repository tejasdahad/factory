import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="page-footer light-blue">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><Link class="grey-text text-lighten-3" to="/">Home</Link></li>
                  <li><Link class="grey-text text-lighten-3" to="/about">About</Link></li>
                  <li><Link class="grey-text text-lighten-3" to="/contact">Contact us</Link></li>
                  <li><Link class="grey-text text-lighten-3" to="/products">Products</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container center">
            Copyright ©2020 Laddha Agro Plast Industries
            </div>
          </div>
        </footer>
    )
}

export default Footer;