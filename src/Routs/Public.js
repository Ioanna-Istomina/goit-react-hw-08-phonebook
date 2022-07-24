import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {
  let isLogin = localStorage.getItem('user');

  return <>{!isLogin ? children : <Navigate to="/contacts" replace />}</>;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
