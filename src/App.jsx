import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import AuthForm from './components/AuthForm/AuthForm';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <AuthForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
