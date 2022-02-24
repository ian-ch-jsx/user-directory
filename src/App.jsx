import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import AuthForm from './components/AuthForm/AuthForm';
import Profile from './views/Profile/Profile';
import Confirm from './views/Auth/Confirm';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <AuthForm isSigningUp={false} />
          </Route>
          <Route exact path="/confirm">
            <Confirm />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
