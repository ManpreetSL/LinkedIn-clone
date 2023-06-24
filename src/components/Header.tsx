import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='/images/logo.png' alt='' />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' name='' id='' />
        </div>
      </div>
      <div className='header__right'></div>
    </div>
  );
};

export default Header;
