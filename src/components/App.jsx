import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import ContactsView from '../views/ContactsView';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/authorization/auth-operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </>
  );
}

export default App;
