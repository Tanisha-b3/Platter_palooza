import './footer.css';
import logo_black from '../../assets/logo_black.png';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    
    <div className='footer' id='footer'>
      <div className='footer-contents'>
        <div className='footer-left'>
          <img src={logo_black} alt='Logo' className='d'/>
          <br></br>
          <p>Occaecat excepteur mollit do tempor ad Lorem mollit.</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='Facebook'/>
            <img src={assets.twitter_icon} alt="Twitter"/>
            <img src={assets.linkedin_icon} alt='LinkedIn'/>
          </div>
        </div>
        <div className='footer-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-right'>
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 234533222</li>
            <li>platterpalooza@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @ PlatterPalooza.com - All Rights Reserved</p>
    </div>
  );
}

export default Footer;
