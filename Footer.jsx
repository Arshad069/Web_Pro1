import React from 'react';
import '../Styles/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-flex">
                    <div className="footer-column">
                        <h5 className="footer-heading">Airbnb</h5>
                        <ul className="footer-link-list">
                            <li><a href="#!" className="footer-link">About Us</a></li>
                            <li><a href="#!" className="footer-link">Careers</a></li>
                            <li><a href="#!" className="footer-link">Privacy</a></li>
                            <li><a href="#!" className="footer-link">Terms</a></li>
                            <li><a href="#!" className="footer-link">Help</a></li>
                        </ul>
                    </div>

                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
