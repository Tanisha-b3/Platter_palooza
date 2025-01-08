import './Header.css';

const Header = () => {
   return (
      <header className="header">
         <div className="header-contents">
            <h1>Order Your Favorite Food Here</h1>
            <p>
               Choose from a diverse menu featuring an array of dishes crafted with the finest ingredients 
               and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, 
               one delicious meal at a time.
            </p>
            <a href="#explore-menu">
               <button className="view-menu-btn">View Menu</button>
            </a>
         </div>
      </header>
   );
};

export default Header;
