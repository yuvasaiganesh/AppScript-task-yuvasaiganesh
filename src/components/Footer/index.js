import React from 'react';
import './index.css'; 
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">
               
               <div className="row">
               
                    <div className="col-md-4">
                        <h5>Subscribe</h5>
                        <form className="subscribe-form">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>

                    
                    <div className="subSections">

                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="contact-info">
                            <li><i className="fas fa-phone"></i> +1-123-456-7890</li>
                            <li><i className="far fa-envelope"></i> info@example.com</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5>Currency</h5>
                        <select className="currency-selector">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                        </select>
                    </div>
                    </div>
                    </div>
         <hr/>

                    <div className="row">

                    <div className="col-md-4">
                        <h5>metta muse</h5>
                        <ul className="quick-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Stories</a></li>
                            <li><a href="#">Astisans</a></li>
                            <li><a href="#">Boutiques</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">EU compliance Docs</a></li>
                            
                        </ul>
                    </div>
                    
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="quick-links">
                            <li><a href="#">Orders & Shipping</a></li>
                            <li><a href="#">Payment & Pricing</a></li>
                            <li><a href="#">join/Login as a seller</a></li>
                            <li><a href="#">Retur and Refunds</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms and Condition</a></li>
                        </ul>
                    </div>
                    
                    <div className="subSections">
                    <div className="col-md-4 ">
                        <h5>Follow Us</h5>
                        <div className="payment-icons">
                            <FaYoutube/>
                            <FaInstagramSquare/>
                        </div>
                    </div>
               
                
                    <div className="col-md-4">
                        <h5>Payments Accepted</h5>
                        <div className="payment-icons">
                            <FaGooglePay />
                            <FaCcMastercard/>
                            <FaApplePay/>
                            <SiAmericanexpress />
                            <FaCcMastercard/>
                        </div>
                   </div>
                   </div>
                   </div>
                    
                    
                
           
        </footer>
    );
}

export default Footer;
