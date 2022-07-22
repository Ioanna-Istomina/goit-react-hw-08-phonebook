import UserMenu from 'components/UserMenu';
import { NavLink } from 'react-router-dom';
import { useGetUserQuery } from '../../redux/API';

const activeLink = ({ isActive }) =>
  isActive ? 'nav-link active' : 'nav-link';

const Header = () => {
  const { data } = useGetUserQuery();

  return (
    <header className="navbar navbar-expand-xl bg-light justify-content-end">
      {!data ? (
        <nav>
          <ul className=" nav nav-pills" style={{ paddingRight: '20px' }}>
            <NavLink to="/authorization" className={activeLink}>
              <li className="nav-item">LogIn</li>
            </NavLink>
            <NavLink to="/registration" className={activeLink}>
              <li className="nav-item">Registration</li>
            </NavLink>
          </ul>
        </nav>
      ) : (
        <UserMenu />
      )}
    </header>
  );
};

export default Header;
