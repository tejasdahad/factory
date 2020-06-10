import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDrips } from '../../actions/productsAction';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import './Drips.css';

const Drips = ({ drips, getDrips }) => {
    useEffect(() => {
        getDrips();
    }, []);
    return (
        <div>
        <nav>
            <div className="nav-wrapper black">
            <div className="col s2"></div>
            <div className="col s10" style={{paddingLeft:10}}>
                <Link to="/products" className="breadcrumb">Products</Link>
                <Link to="/drips" className="breadcrumb">Drips</Link>
            </div>
            </div>
        </nav>
        <h3 className="center">Drip Irrigation System</h3>
        <div className="divider"></div>
        <div className="row benefit">
            <div className="col m3">
            <h1>Benefits</h1>
            </div>
            <div className="col m9">
            <ol className="left-align">
                <li>A large sum of water is saved by using drips.</li>
                <li>Water is supplied to a greater area in small amount of time.</li>
                <li>Unwanted Grass in farm is reduced greatly. Prevously as water was wasted to unwanted area, so it would lead to growing of unwanted grass anywhere.</li>
                <li>Main benefit is proper amount of water is supplied to crops hence leading to their proper growth.</li>
            </ol>
            </div>
        </div>
        <div className="brands">
        <h3 className="center">Brands we make...</h3>
            <div className="row">
                <div className="col m1"></div>
                <div className="col s12 m4">
                    <h5 className="center">VARUN GOLD AND PARVATI BRAND Non-ISI 12MM ROUND AND INLINE LATERAL</h5>
                    <img src="/images/12mm_non.jpg" alt="non-isi 12mm" style={{width:500,height: 300}}/>
                </div>
                <div className="col m2"></div>
                <div className="col s12 m4">
                    <h5 className="center">VARUN GOLD AND PARVATI BRAND Non-ISI 16MM ROUND AND INLINE LATERAL</h5>
                    <img src="/images/16mm_non.jpg" alt="non-isi 16mm" style={{width:500, height: 300}} />
                </div>
            </div>
        </div>
        <div className="sizes">
            <div className="row">
                <div className="col m9">
                    <h6>Two sizes are available. One of 12mm and second of 16mm.</h6>
                    <p>In 12mm, size varies from 12.30 to 12.90.</p>
                    <p>In 16mm, size varies from 16.30 to 16.90</p>
                </div>
                <div className="col m3">
                    <h4>Sizes we manufacture</h4>
                </div>
            </div>
            
        </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    drips: state.products.drips
});

export default connect(mapStateToProps,{ getDrips })(Drips);