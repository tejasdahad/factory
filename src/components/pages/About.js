import React, { useEffect } from 'react';
import { getDirectors } from '../../actions/directorActions';
import { connect } from 'react-redux';

const About = ({ getDirectors, directors }) => {
    useEffect(() => {
        getDirectors();
    },[]);
    return (
        <div>
            <p>
            Laddha Agro Plast Industries Private Limited is a Non-govt company, incorporated on 19 Nov, 1987. It's a private unlisted company and is classified as 'company limited by shares'.

            Company's authorized capital stands at Rs 100.0 lakhs and has 79.0% paid-up capital which is Rs 79.0 lakhs. Laddha Agro Plast Industries Private Limited last annual general meet (AGM) happened on 29 Sep, 2017. The company last updated its financials on 31 Mar, 2017 as per Ministry of Corporate Affairs (MCA).

            Laddha Agro Plast Industries Private Limited is majorly in Agriculture and Allied Activities business from last 33 years and currently, company operations are active. Current board members & directors are RAVINDRA DAGDULAL LADDHA and KIRAN SHIVNARAYAN DAHAD .

            Company is registered in Mumbai (Maharashtra) Registrar Office. Laddha Agro Plast Industries Private Limited registered address is PLOT NO 125M I D C JALGAON MH 425003 IN
            </p>
            {directors && <div>
                <ul className="collection">
                    {directors.map((director) => <li key={director.id} className="collection-item avatar">
                        <img src={director.image} alt="" className="circle" />
                        <span className="title">{director.name}</span>
                        <p>
                            {director.description}
                        </p>
                    </li>)
                    }
                </ul>
            </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    directors: state.directors.directors
});

export default connect(mapStateToProps, { getDirectors })(About);