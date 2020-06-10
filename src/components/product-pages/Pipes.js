import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNonISI, getPvcPipesISIM, getPvcPipesISIR } from '../../actions/productsAction';
import Spinner from '../layout/Spinner';

const Pipes = ({ getNonISI, getPvcPipesISIM, getPvcPipesISIR, pvcISIR, pvcISIM, nonISI }) => {
    useEffect(() => {
        getNonISI();
        getPvcPipesISIM();
        getPvcPipesISIR();
    },[]);
    return (
        <div>
        <nav>
            <div className="nav-wrapper black">
            <div className="col s2"></div>
            <div className="col s10" style={{paddingLeft:10}}>
                <Link to="/products" className="breadcrumb">Products</Link>
                <Link to="/pipes" className="breadcrumb">Pipes</Link>
            </div>
            </div>
        </nav>
        <h3 className="center">P.V.C Pipes</h3>
        <div className="divider"></div>
        <h4 className="center">Brands we make...</h4>
        <div className="container">
        <ul className="collapsible">
            <li className="active">
            <div className="collapsible-header"><h6>Roopam Gold</h6></div>
            <div className="collapsible-body"><span>
                <img src="images/isiroopam.jpg" alt="isiroopam" style={{width:500, height:250}} />
            </span></div>
            </li>
            <li>
            <div className="collapsible-header"><h6>Muviflex</h6></div>
            <div className="collapsible-body"><span>
            <img src="images/pvcISIM.jpeg" alt="pvcisim" style={{width:500, height:250}} />
            </span></div>
            </li>
            <li>
            <div className="collapsible-header"><h6>Varun Gold</h6></div>
            <div className="collapsible-body"><span></span></div>
            </li>
            <li>
            <div className="collapsible-header"><h6>Sardar</h6></div>
            <div className="collapsible-body"><span></span></div>
            </li>
            <li>
            <div className="collapsible-header"><h6>Gopi</h6></div>
            <div className="collapsible-body"><span></span></div>
            </li>
            <li>
            <div className="collapsible-header"><h6>Spark</h6></div>
            <div className="collapsible-body"><span></span></div>
            </li>
        </ul>
        </div>
        </div>
    )
}

const mapStateToProps =(state) => ({
    pvcISIR: state.products.pvcISIR,
    pvcISIM: state.products.pvcISIM,
    nonISI: state.products.nonISI
});

export default connect(mapStateToProps, { getNonISI, getPvcPipesISIM, getPvcPipesISIR })(Pipes);