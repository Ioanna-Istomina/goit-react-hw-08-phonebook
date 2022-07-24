import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import PhonebookPage from '../pages/PhonebookPage';
import Header from './Header';
import PrivateRoute from 'Routs/Private';
import PublicRoute from 'Routs/Public';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes className="container">
        <Route
          path="/registration"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="/authorization"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <PhonebookPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
};
