import './Header.css';
import logo from '../assets/startup.svg';

const Header = () => {
  return (
    <div className='header-container'>
      <img src={logo} alt='logo' className='header-image'></img>
      <h1>Startup Name Generator</h1>
    </div>
  );
};

export default Header;