import './footer.css'
import logo_black from '../../assets/logo_black.png';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-contents'>
        <div className='footer-left'>
         <img src={logo_black} alt='' className='d'/>
         <p>Occaecat excepteur mollit do tempor ad Lorem mollit.</p>
        <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt=''/>
            <img src={assets.twitter_icon} alt=""/>
            <img src={assets.linkedin_icon} alt=''></img>
        </div>
        </div>
        <div className='footer-center'>
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className='footer-right'>
            <h2>Get In TOUCh</h2>
            <ul>
                <li>+91 234533222</li>
                <li>platter Plalooza@gmail.com</li>
            </ul>
        </div>
        </div>
      <hr></hr>
      <p className='footer-copyright'>copyright 2024@ Plalooza.com-All Right Reserved</p>
    </div>
  )
}

export default Footer
