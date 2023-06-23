import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <ul>
          <li><a href="#"><FacebookIcon /></a></li>
          <li><a href="#"><TwitterIcon /> </a></li>
          <li><a href="#"><LinkedInIcon /> </a></li>
          <li><a href="#"><InstagramIcon /> </a></li>
          </ul>

        <p>&copy; 2023 Terrasoftware. Todos los derechos reservados.</p>
     
        </div>
      </div>
   
    </footer>
  );
};

export default Footer;
