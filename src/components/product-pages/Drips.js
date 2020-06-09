import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDrips } from '../../actions/productsAction';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

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
            {drips.length===0 && <div className="center"><Spinner /></div>}
            {drips.length !==0 && <div className="container">
                <table className="responsive striped centered">
                    <thead>
                    <tr>
                        <th>Id.</th>
                        <th>Brand Name</th>
                        <th>Space</th>
                    </tr>
                    </thead>

                    <tbody>
                    {drips.length!==0 && drips.map((drip) => <tr>
                        <td>{drip.id}</td>
                        <td><Link>{drip.Brand_name2}</Link></td>
                        <td>{drip.space}</td>
                    </tr>)}
                    
                   
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    drips: state.products.drips
});

export default connect(mapStateToProps,{ getDrips })(Drips);