import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <h2 className="center" style={{marginBottom:0}}>PRODUCTS WE MAKE</h2>
            <div className="divider"></div>
            <div className="row hoverable" style={{marginBottom:10}}>
                <h3 className="center">Drip Irrigation Systems</h3>
                <div className="row">
                <div className="col m2">
                <img src="/images/drip.jfif" alt="drip1" style={{width:300, height:200}}/>
                </div>
                <div className="col m1"></div>
                <div className="col m6 center-align">
                    <p>Drip irrigation is today’s need because Water – nature’s gift to mankind is not unlimited and free forever. World water resources are fast diminishing. The one and only answer to this problem is Drip Irrigation Systems.

                    After detailed study of inter–relationship among soil, water, crop, land terrain and related agro climatic conditions, We designed a suitable and economically viable system to deliver a measured quantity of water at the root zone of each plant at regular intervals. This is to ensure that the plants do not suffer from stress or strain of less and over watering. The system installed at the farmer’s field is commissioned and training imparted to the farmer, followed by regular after sales services.
            
                    The result – A totally customized, efficient and long–life system which ensures saving in water, early maturity and a bountiful harvest, season after season, year after year. Apart from all this, savings in labour and fertilizer costs.
            
                    By installing Laddha Drip, you will be a member of a happy family of Laddha Drip System owners.
                    </p>
                </div>
                <div className="col m2">
                <img src="/images/drip3.jpg" alt="drip2" style={{width:300, height:200}}/>
                </div>
                </div>
                <div className="row">
                    <div className="col m3">
                        <img src="/images/drip6.jpg" alt="drip6" style={{width:300, height:200}} />
                    </div>
                    <div className="col m1"></div>
                    <div className="col m3">
                        <img src="/images/drip5.jpg" alt="drip5" style={{width:300, height:200}} />
                    </div>
                    <div className="col m1"></div>
                    <div className="col m3">
                        <img src="/images/drip1.jpg" alt="drip1" style={{width:300, height:200}} />
                    </div>
                </div>
                <div className="row center">
                    <Link to="/drips" className="btn waves-effect waves-light hoverable ">View Drips</Link>
                </div>
            </div>
            
            <div className="divider"></div>
            <div className="row hoverable" style={{marginBottom:10}}>
                <h3 className="center">P.V.C Pipes</h3>
                <div className="row">
                <div className="col m6">
                    <div className="row">
                        <div className="col m4">
                            <img src="/images/pipe1.jpeg" alt="pipe1" style={{width:300, height:200}}/>
                        </div>
                        <div className="col m2"></div>
                        <div className="col m4">
                            <img src="/images/pipe2.jpeg" alt="pipe2" style={{width:300, height:200}}/>
                        </div>
                    </div>
                </div>
                <div className="col m6">
                    <p>PVC Plastic Pipes and Pipe Fitting are available in vast range and in various materials, Whatever be your application... We have the Piping System - that can be installed on surface, buried, slip lined, trench less, floating and submerged. PVC Plastic pipes can be used in Fluids transport include, For Lifting, Transporting, Conveying, Distributing Disposing or Tapping of Water, waste-water (drainage & sewage), compressed gases/air, odorous and corrosive gasses, chemicals and hazardous wastes/effluents. Solids conveyed include coal ash, slurries, sand and cables.

                    Used for conveyance of water in drip/sprinkler irrigation systems, lift irrigation systems, surface irrigation systems, subsoil drainage system, potable water supply systems, rising main and distribution lines.
                    </p>
                </div>
                </div>
                <div className="row">
                    <div className="col m3">
                        <img src="/images/pvc.jpg" alt="pvc" style={{width:300, height:200}} />
                    </div>
                    <div className="col m1"></div>
                    <div className="col m3">
                        <img src="/images/pipe4.jpeg" alt="pipe4" style={{width:300, height:200}} />
                    </div>
                    <div className="col m1"></div>
                    <div className="col m3">
                        <img src="/images/pvcISIM.jpeg" alt="pvcISIM" style={{width:300, height:200}} />
                    </div>
                </div>
                <div className="row center">
                    <Link to="/pipes" className="btn waves-effect waves-light hoverable">View P.V.C pipes</Link>
                </div>
            </div>
            
            <div className="divider"></div>
            <div className="row hoverable" style={{marginBottom:10}}>
                <h3 className="center">AGRICULTURAL FITTINGS ROOPAM</h3>
                <div className="col m2">
                <img src="/images/elbow.jpg" alt="elbow" style={{width:300, height:200}}/>
                </div>
                <div className="col m1"></div>
                <div className="col m6 center-align">
                    <p>
                    The company stands tall as a Manufacturer and Supplier of Agricultural PVC Pipe Fittings in Jalgaon. The light weight Agricultural PVC Pipe Fittings, offered by the company, is used as accessories by the Rigid PVC Pipes. The major areas of operation for the Agricultural PVC Pipe Fittings are irrigation purposes. The company offers a wide range of Agricultural PVC Pipe Fittings in various ranges and specifications in the standard as well as customized forms. The Agricultural PVC Pipe Fittings are tough and are known for their high endurance and durability.              
                    </p>
                </div>
                <div className="col m2">
                <img src="/images/rfta.jpg" alt="rfta" style={{width:300, height:200}}/>
                </div>
                <div className="row">
                    <div className="col m3">
                        <img src="/images/mta.jpg" alt="mta" style={{width:300, height:200}} />
                    </div>
                    <div className="col m1"></div>
                    <div className="col m3">
                        <img src="/images/saddle.jpg" alt="saddle" style={{width:300, height:200}} />
                    </div>
                    <div className="col m1"></div>
                    <div className="col m3">
                        <img src="/images/reducingtee.jpg" alt="reducing tee" style={{width:300, height:200}} />
                    </div>
                </div>
                <div className="row center">
                    <Link to="/agriproducts" className="btn waves-effect waves-light hoverable">View Agri Products</Link>
                </div>
            </div>
            
            <div className="divider"></div>

            <div/>
        </div>
    )
}

export default Products;