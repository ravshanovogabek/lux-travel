import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <footer className="footer-container">
            <div className="footer-logo-section">
                <img src="https://luxtravel-astonovb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-logo.845c04a3.png&w=256&q=75" alt="Lux Travel Logo" className="footer-logo" />
                <p>O'zbekiston va qo'shni davlatlar bo'ylab tur xizmatlari</p>
                <div className="footer-social-icons">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-facebook-messenger"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="footer-links">
                <h4>Company</h4>
                <ul>
                    <li><a href="#about">Biz haqimizda</a></li>
                    <li><a href="#advantages">Nega biz?</a></li>
                    <li><a href="#contacts">Aloqa</a></li>
                    <li><a href="#services">Xizmatlar</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <h4>Destinations</h4>
                <ul>
                    <li><a href="#">Bukhara</a></li>
                    <li><a href="#">Tashkent</a></li>
                    <li><a href="#">Samarkand</a></li>
                    <li><a href="#">Zomin</a></li>
                    <li><a href="#">Kesh</a></li>
                    
                </ul>
            </div>
        </footer>
        </footer>
    );
};

export default Footer;
