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
        <h5 className="center">ISI PVC PIPE ROOPAM GOLD</h5>
        <div className="center">
        <img src="/images/isiroopam.jpg" alt="isir" style={{width:1000, height: 300}}/>
        </div>
        {pvcISIR.length===0 && <div className="center"><Spinner /></div>}
        {pvcISIR.length !==0 && <div className="container">
            <table className="responsive striped centered">
                <thead>
                <tr>
                    <th>Id.</th>
                    <th>Size</th>
                    <th>Class- 2. 4Kg</th>
                    <th>Class- 3. 6Kg</th>
                </tr>
                </thead>

                <tbody>
                {pvcISIR.length!==0 && pvcISIR.map((pvc) => <tr>
                    <td>{pvc.id}</td>
                    <td><Link>{pvc.size}</Link></td>
                    <td>{pvc.class1}</td>
                    <td>{pvc.class2}</td>
                </tr>)}
                
               
                </tbody>
            </table>
        </div>}
        <h5 className="center">ISI PVC PIPE MUVIFLEX</h5>
        <div className="center">
            <img src="/images/pvcISIM.jpeg" alt="pvcISIM" style={{width:1000, height: 300}}/>
        </div>
        {pvcISIM.length===0 && <div className="center"><Spinner /></div>}
        {pvcISIM.length !==0 && <div className="container">
            <table className="responsive striped centered">
                <thead>
                <tr>
                    <th>Id.</th>
                    <th>Size</th>
                    <th>Class- 2. 4Kg</th>
                    <th>Class- 3. 6Kg</th>
                </tr>
                </thead>

                <tbody>
                {pvcISIM.length!==0 && pvcISIM.map((pvc) => <tr>
                    <td>{pvc.id}</td>
                    <td><Link>{pvc.size}</Link></td>
                    <td>{pvc.class1}</td>
                    <td>{pvc.class2}</td>
                </tr>)}
                
               
                </tbody>
            </table>
        </div>}
        <h5 className="center">NON ISI PIPE 6 MTR</h5>
        <div className="center">
            <img src="/images/nonisi.jpg" alt="nonisi" style={{width:1000, height:300}} />
        </div>
        {nonISI.length===0 && <div className="center"><Spinner /></div>}
        {nonISI.length !==0 && <div className="container">
            <table className="responsive striped centered">
                <thead>
                <tr>
                    <th>Id.</th>
                    <th>Size</th>
                    <th>Light Weight</th>
                    <th>Medium Weight</th>
                    <th>Heavy Weight</th>
                </tr>
                </thead>

                <tbody>
                {nonISI.length!==0 && nonISI.map((pvc) => <tr>
                    <td>{pvc.id}</td>
                    <td><Link>{pvc.size}</Link></td>
                    <td>{pvc.lw}</td>
                    <td>{pvc.mw}</td>
                    <td>{pvc.hw}</td>
                </tr>)}
                
               
                </tbody>
            </table>
        </div>}
        </div>
    )
}

const mapStateToProps =(state) => ({
    pvcISIR: state.products.pvcISIR,
    pvcISIM: state.products.pvcISIM,
    nonISI: state.products.nonISI
});

export default connect(mapStateToProps, { getNonISI, getPvcPipesISIM, getPvcPipesISIR })(Pipes);