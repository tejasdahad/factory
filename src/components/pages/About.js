import React, { useEffect } from 'react';
import { getDirectors } from '../../actions/directorActions';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import './About.css';

const About = ({ getDirectors, directors }) => {
    useEffect(() => {
        getDirectors();
    },[directors]);
    return (
        <div>
            <div className="about"><h2>About us</h2></div>
            <div className="row">
                <div className="col m8">
                <p>
                Laddha Agro Plast Industries Private Limited is a Non-govt company, incorporated on 19 Nov, 1987. It's a private unlisted company and is classified as 'company limited by shares'.

                Company's authorized capital stands at Rs 100.0 lakhs and has 79.0% paid-up capital which is Rs 79.0 lakhs. Laddha Agro Plast Industries Private Limited last annual general meet (AGM) happened on 29 Sep, 2017. The company last updated its financials on 31 Mar, 2017 as per Ministry of Corporate Affairs (MCA).

                Laddha Agro Plast Industries Private Limited is majorly in Agriculture and Allied Activities business from last 33 years and currently, company operations are active. Current board members & directors are RAVINDRA DAGDULAL LADDHA and KIRAN SHIVNARAYAN DAHAD .

                Company is registered in Mumbai (Maharashtra) Registrar Office. Laddha Agro Plast Industries Private Limited registered address is PLOT NO 125M I D C JALGAON MH 425003 IN
                </p>
                <div className="row">
                    <div className="col m6">
                        <img src="/images/iaf.png" alt="iaf" />
                    </div>
                    <div className="col m6">
                        <img src="/images/isi.jfif" alt="isi" />
                    </div>
                </div>
                </div>
                <div className="col m4 center">
                    <img src="/images/iso9001.jfif" alt="iso" style={{width: 350,height:350, marginTop:10 }} />
                </div>
            </div>
            <div className="divider"></div>
            {directors.length===0 && <div className="center">
                <Spinner />
            </div>}
            {directors.length!== 0 && <div>
                <div className="row"><h3 className="center">Directors</h3></div>
                <div className="row">
                    <div className="col m2"></div>
                    {directors.map((director) => <div className="col m4">
                    <div className="card hoverable" style={{width:400, height:600}}>
                        <div className="card-image">
                            <img src={director.image} style={{width:400, height:400}} />
                            <span className="card-title">{director.name}</span>
                        </div>
                        <div className="card-content">
                            <p>{director.description}</p>
                        </div>
                    </div>
                </div>
                )}
                </div>
            </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    directors: state.directors.directors
});

export default connect(mapStateToProps, { getDirectors })(About);