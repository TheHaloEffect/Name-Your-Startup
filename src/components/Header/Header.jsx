import './Header.css';
import logo from '../../assets/startup.svg';

const Header = () => {
  return (
    <div className='header-container'>
      <img src={logo} alt='logo' className='header-image'></img>
      <h1 className='header-text'>Name Your Startup</h1>
    </div>
  );
};

export default Header;