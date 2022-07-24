import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  let isLogin = localStorage.getItem('user');

  return <>{isLogin ? children : <Navigate to="/registration" replace />}</>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
