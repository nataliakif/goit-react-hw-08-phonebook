import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
// import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/authorization/auth-operations';
import authSelectors from 'redux/authorization/auth-selectors';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomeView = lazy(() => import('../views/HomeView'));
const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const ContactsView = lazy(() => import('../views/ContactsView'));

function App() {
  const dispatch = useDispatch();
  const isRefreshCurrentUser = useSelector(authSelectors.isRefreshUserData);
  console.log(isRefreshCurrentUser);
  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshCurrentUser && (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PublicRoute>
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </>
    )
  );
}

export default App;
