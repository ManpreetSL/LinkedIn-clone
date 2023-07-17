import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.scss';
import HeaderOption from './HeaderOption';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='/images/logo.png' alt='' />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' name='' id='' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messages' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatarSrc='images/Erza_avatar.png' title='Erza' />
      </div>
    </div>
  );
};

export default Header;
