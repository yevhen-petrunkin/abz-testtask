import placeholder from '../../../assets/icons/avatar.svg';
import './Avatar.scss';

const Avatar = ({ url }) => {
  return (
    <div className="avatar">
      <img
        src={url ? url : placeholder}
        alt="User Avatar"
        aria-label="User Avatar"
      />
    </div>
  );
};

export default Avatar;
