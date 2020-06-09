import React, { useEffect } from 'react';
import { getAgriR, getAgriRG4, getAgriRG6 } from '../../actions/productsAction';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const AgriProducts = ({ getAgriR, getAgriRG4, getAgriRG6, agriRoopam, agriRoopamG4, agriRoopamG6 }) => {
    useEffect(() => {
        getAgriR();
        getAgriRG4();
        getAgriRG6();
        
    },[]);
    return (
        <div>
        <nav>
            <div className="nav-wrapper black">
            <div className="col s2"></div>
            <div className="col s10" style={{paddingLeft:10}}>
                <Link to="/products" className="breadcrumb">Products</Link>
                <Link to="/agriproducts" className="breadcrumb">AgriProducts</Link>
            </div>
            </div>
        </nav>
            <h3 className="center">AGRICULTURAL FITTINGS</h3>
            <div className="divider"></div>
            <h5 className="center">AGRICULTURAL FITTINGS ROOPAM GOLD L/W</h5>
            <div className="center">
            {agriRoopam.length === 0 && <Spinner />}
            </div>
            <div className="row">
            {agriRoopam.length !== 0 && agriRoopam.map((agri) => (
                <div className="card col s12 m4">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={agri.image}  style={{width:450, height: 300}}/>
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 center">{agri.name}<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{agri.name}<i class="material-icons right">close</i></span>
                {agri.agriprod.length !==0 && <div className="container">
                    <table className="responsive striped centered">
                        <thead>
                        <tr>
                            <th>Id.</th>
                            <th>Size</th>
                            <th>Qty/Box</th>
                        </tr>
                        </thead>

                        <tbody>
                        {agri.agriprod.length!==0 && agri.agriprod.map((agriprod1) => <tr>
                            <td>{agriprod1.id}</td>
                            <td><Link>{agriprod1.size}</Link></td>
                            <td>{agriprod1.qty}</td>
                        </tr>)}
                        
                    
                        </tbody>
                    </table>
                </div>}
                </div>
            </div>
            ))
        }
                    
        </div>
        <div className="divider"></div>
            <h5 className="center">AGRICULTURAL FITTINGS ROOPAM GOLD PN-4</h5>
            <div className="center">
            {agriRoopamG4.length === 0 && <Spinner />}
            </div>
            <div className="row">
            {agriRoopamG4.length !== 0 && agriRoopamG4.map((agri) => (
                <div className="card col s12 m4">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={agri.image}  style={{width:450, height: 300}}/>
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 center">{agri.name}<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{agri.name}<i class="material-icons right">close</i></span>
                {agri.agriprod.length !==0 && <div className="container">
                    <table className="responsive striped centered">
                        <thead>
                        <tr>
                            <th>Id.</th>
                            <th>Size</th>
                            <th>Qty/Box</th>
                        </tr>
                        </thead>

                        <tbody>
                        {agri.agriprod.length!==0 && agri.agriprod.map((agriprod1) => <tr>
                            <td>{agriprod1.id}</td>
                            <td><Link>{agriprod1.size}</Link></td>
                            <td>{agriprod1.qty}</td>
                        </tr>)}
                        
                    
                        </tbody>
                    </table>
                </div>}
                </div>
            </div>
            ))
        }
                    
        </div>
        <div className="divider"></div>
            <h5 className="center">AGRICULTURAL FITTINGS ROOPAM GOLD PN-6</h5>
            <div className="center">
            {agriRoopamG6.length === 0 && <Spinner />}
            </div>
            <div className="row">
            {agriRoopamG6.length !== 0 && agriRoopamG6.map((agri) => (
                <div className="card col s12 m4">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={agri.image}  style={{width:450, height: 300}}/>
                </div>
                <div class="card-content">
                <span class="card-title activator grey-text text-darken-4 center">{agri.name}<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{agri.name}<i class="material-icons right">close</i></span>
                {agri.agriprod.length !==0 && <div className="container">
                    <table className="responsive striped centered">
                        <thead>
                        <tr>
                            <th>Id.</th>
                            <th>Size</th>
                            <th>Qty/Box</th>
                        </tr>
                        </thead>

                        <tbody>
                        {agri.agriprod.length!==0 && agri.agriprod.map((agriprod1) => <tr>
                            <td>{agriprod1.id}</td>
                            <td><Link>{agriprod1.size}</Link></td>
                            <td>{agriprod1.qty}</td>
                        </tr>)}
                        
                    
                        </tbody>
                    </table>
                </div>}
                </div>
            </div>
            ))
        }
                    
        </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    agriRoopam: state.products.agriRoopam,
    agriRoopamG4: state.products.agriRoopamG4,
    agriRoopamG6: state.products.agriRoopamG6
});

export default connect(mapStateToProps, { getAgriR, getAgriRG4, getAgriRG6 })(AgriProducts);