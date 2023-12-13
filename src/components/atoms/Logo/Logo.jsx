import './Logo.scss';
import logo from '../../../assets/icons/logo.svg';

const Logo = () => {
  return (
    <div className="logo" aria-label="Logo TestTask">
      <a href="." aria-label="Link to Homepage">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
