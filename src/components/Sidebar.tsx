import { Avatar } from '@mui/material';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='' alt='' />
        <Avatar className='sidebar__avatar' />
        <h2>Erza Scarlet</h2>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <span>Who viewed you</span>
          <span className='sidebar__statNumber'>2,543</span>
        </div>
        <div className='sidebar__stat'>
          <span>Views on posts</span>
          <span className='sidebar__statNumber'>3,2571</span>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <h3>Recent</h3>
      </div>
    </div>
  );
};

export default Sidebar;
