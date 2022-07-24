import { useState } from 'react';
import {
  useAuthorizeUserMutation,
  useAddUserMutation,
} from '../../redux/API.js';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const RegistrationForm = ({ flag }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authorizeUser] = useAuthorizeUserMutation();
  const [registerUser] = useAddUserMutation();
  const navigate = useNavigate();

  const handleChangeInput = ev => {
    const { name, value } = ev.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    if (flag) {
      setName('');
    }
    setEmail('');
    setPassword('');
  };

  const user = {
    name,
    email,
    password,
  };

  const navigateToContacts = () => {
    navigate('/contacts');

    reset();
  };

  const onRegister = e => {
    e.preventDefault();
    registerUser(user)
      .unwrap()
      .then(() => navigateToContacts())
      .catch(() => toast.error('User with such email already exist.'));
  };

  const onLogin = e => {
    e.preventDefault();
    authorizeUser(user)
      .unwrap()
      .then(() => navigateToContacts())
      .catch(() => toast.error('Sorry, user not found'));
  };

  return (
    <>
      <form
        onSubmit={flag ? onRegister : onLogin}
        className=" d-flex container-fluid center-block flex-column col-md-3"
      >
        {flag ? (
          <label className="form-label">
            Name
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChangeInput}
            />
          </label>
        ) : (
          ''
        )}
        <label className="form-label">
          Email
          <input
            className="form-control"
            type="mail"
            name="email"
            value={email}
            required
            onChange={handleChangeInput}
          />
        </label>
        <label className="form-label">
          Password
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChangeInput}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          {flag ? 'Registration' : 'LogIn'}
        </button>
      </form>
      <Toaster position="top-left" />
    </>
  );
};

export default RegistrationForm;
