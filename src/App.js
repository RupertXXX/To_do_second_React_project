import React from 'react';
import c from './App.module.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContentContainer from './components/content/contentContainer';
import Notes from './components/content/notes/notes';
import Settings from './components/content/settings/settings';
import Auth from './components/auth/auth';
import RegisterContainer from './components/auth/register/registerContainer';
import LoginContainer from './components/auth/login/loginContainer';

function App() {
  return (
    <div className={c.App} >
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/notes" />} />
        <Route path="/auth" render={() => <Auth />} />
        <Route path="/register" render={() => <RegisterContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/notes" render={() => <ContentContainer children={<Notes />} />} />
        <Route path="/settings" render={() => <ContentContainer children={<Settings />} />} />
      </Switch>
    </div>
  );
}

export default App;