import { SvgIcon } from '@mui/material';
import './HeaderOption.scss';

type Props = {
  Icon?: typeof SvgIcon;
  title: string;
};

const HeaderOption = ({ Icon, title }: Props) => (
  <div className='headerOption'>
    {Icon && <Icon className='headerOption__icon' />}
    <h3 className='headerOption__title'>{title}</h3>
  </div>
);

export default HeaderOption;
