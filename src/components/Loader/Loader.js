import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <RotatingLines height="100" width="100" color="blue" />
    </div>
  );
};

export default Loader;
