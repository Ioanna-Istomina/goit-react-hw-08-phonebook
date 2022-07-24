import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import PrivateRoute from 'Routs/Private';
import PublicRoute from 'Routs/Public';
import { lazy, Suspense } from 'react';
import Loader from './Loader';

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage' /* webpackChunkName: "RegistrationPage" */)
);

const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "LoginPage" */)
);
const PhonebookPage = lazy(() =>
  import('pages/PhonebookPage' /* webpackChunkName: "PhonebookPage" */)
);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
};
