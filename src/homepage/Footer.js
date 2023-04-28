import React from "react";
import './Footer.css';
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {

    return(
        <div className="footer">
            <div className="social">
                <a href="https://facebook.com"><FaFacebook className="icon"/></a>
                <a href="https://www.instagram.com/"><FaInstagram className="icon"/></a>
                <a href="https://twitter.com/"><FaTwitter className="icon"/></a>
                <a href="https://www.whatsapp.com/"><FaWhatsapp className="icon"/></a>

            </div>
            <div className="container">
                <div className="col">
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className="col">
                    <h3>Company</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className="col">
                    <h3>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className="col">
                    <h3>Information</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
            </div>

         

        </div>
    );

}
export default Footer;