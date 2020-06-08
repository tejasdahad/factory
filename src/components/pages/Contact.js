import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container">
            <div className="card" style={{width:500, height:500, marginLeft:200}}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="images/pipes.jpg" style={{width:500, height:400}} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Contact us</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><h3>Contact</h3><i className="material-icons right">close</i></span>
                    <address>
                        <h4>Address</h4>
                        <p>G-125,126</p>
                        <p>MIDC AREA, JALGAON-425002</p>
                        <p>MAHARASHTRA,INDIA</p>
                        <h4>Call us at</h4>
                        <p><a className="waves-effect waves-light" href="tel:+919422283974"><i className="material-icons">call</i>+91-9422283974</a></p>
                        <h4>Mail us</h4>
                        <p><a href="mailto:tejasdahad000@gmail.com"><i className="material-icons">mail</i>laddhagroplast@gmail.com</a></p>
                    </address>
                </div>
            </div>
            <div className="center">
                <fieldset className="location">
                <h4><i className="material-icons">grade</i>  Where to find us?  <i className="material-icons">grade</i></h4>
                <div className="section"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0827953490043!2d75.59206931403229!3d20.989317986019724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU5JzIxLjUiTiA3NcKwMzUnMzkuMyJF!5e0!3m2!1sen!2sin!4v1582119764829!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe></div>
                </fieldset>
            </div>
            <div className="row">
                <h4 className="center">Enquiry Form</h4>
                <fieldset>
                <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                    <input id="name" type="text" className="validate" />
                    <label for="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="phone" type="tel" className="validate" />
                    <label for="phone">Phone Number</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <textarea id="query" className="validate" />
                    <label for="query">What do you want to enquire?</label>
                    </div>
                </div>
                <div className="button">
                    <button className="btn waves-light waves-effect black white-text"><i className="material-icons secondary-content">send</i>Submit</button>
                </div>
                </form>
                </fieldset>
            </div>
        </div>
    )
}

export default Contact;