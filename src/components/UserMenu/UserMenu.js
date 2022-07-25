import { useLogOutUserMutation } from '../../redux/API';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { contactsApi } from '../../redux/API';

const UserMenu = ({ data }) => {
  // const { data } = useGetUserQuery();
  const [logOut] = useLogOutUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutUser = e => {
    e.preventDefault();
    logOut().then(() => {
      navigateToUser();
    });
  };

  const navigateToUser = () => {
    dispatch(contactsApi.util.resetApiState());
    navigate('/registration');
  };

  return (
    <div>
      <span style={{ marginRight: '20px' }}>{`Привіт, ${data?.name}!`}</span>
      <button
        className="btn btn-primary  me-5"
        type="button"
        onClick={logOutUser}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
