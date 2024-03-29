import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import AuthForm from './views/AuthForm/AuthForm';
import Profile from './views/Profile/Profile';
import Confirm from './views/AuthForm/Confirm';
import ProfileForm from './components/ProfileForm/ProfileForm';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <AuthForm isSigningIn />
          </Route>
          <Route exact path="/register">
            <AuthForm />
          </Route>
          <Route exact path="/confirm">
            <Confirm />
          </Route>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/edit">
            <ProfileForm />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/create">
            <ProfileForm isCreating />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
