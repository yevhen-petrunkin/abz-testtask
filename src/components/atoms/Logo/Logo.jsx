import './Logo.scss';
import logo from '../../../assets/icons/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <a href=".">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
