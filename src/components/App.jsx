import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import PhonebookPage from '../pages/PhonebookPage';
import Header from './Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes className="container">
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/authorization" element={<LoginPage />} />
        <Route path="/contacts" element={<PhonebookPage />} />
        <Route path="*" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
};
