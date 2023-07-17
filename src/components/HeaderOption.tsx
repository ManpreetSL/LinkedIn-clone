import { Avatar, SvgIcon } from '@mui/material';
import './HeaderOption.scss';

type Props = {
  avatarSrc?: string;
  Icon?: typeof SvgIcon;
  title: string;
};

const HeaderOption = ({ avatarSrc, Icon, title }: Props) => (
  <div className='headerOption'>
    {Icon && <Icon className='headerOption__icon' />}
    {avatarSrc && <Avatar className='headerOption__icon' src={avatarSrc} />}
    <h3 className='headerOption__title'>{title}</h3>
  </div>
);

export default HeaderOption;
