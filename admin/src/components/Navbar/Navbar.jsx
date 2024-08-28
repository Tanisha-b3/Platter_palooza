import './Navbar.css'
import { assets } from '../../assets/admin_assets/admin_assets/assets';
const Navbar = () => {
  return (
    <div className='navbar'>
    <div>
    <img className='logo' src={assets.logo_black}></img>
    </div>
    <img className='profile' src={assets.profile_image} alt=''/>
    </div>
  );
}

export default Navbar;
