import './Header.css';
import logo from '../../assets/startup.svg';

const Header = ({headerExpanded}) => {
  return (
    <div className='header-container'>
      <img src={logo} alt='logo' className={`header-image 
      ${headerExpanded ? 
        'header-image-expanded' : 'header-image-contracted'}`}></img>
      <h1 className={`header-text ${headerExpanded ? 'header-text-expanded' : 'header-text-contracted'}`}>Name Your Startup</h1>
    </div>
  );
};

export default Header;