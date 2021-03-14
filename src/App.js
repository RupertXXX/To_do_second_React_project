import React from 'react';
import c from './App.module.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContentContainer from './components/content/contentContainer';
import NotesContainer from './components/content/notes/notesContainer';
import Settings from './components/content/settings/settings';
import AuthContainer from './components/auth/authContainer';
import RegisterContainer from './components/auth/register/registerContainer';
import LoginContainer from './components/auth/login/loginContainer';
import NotFound from './components/notFound/notFound';

function App() {
  return (
    <div className={c.App} >
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/notes" />} />
        <Route path="/auth" render={() => <AuthContainer />} />
        <Route path="/register" render={() => <RegisterContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/notes" render={() => <ContentContainer children={<NotesContainer />} />} />
        <Route path="/incompleted" render={() => <ContentContainer children={<NotesContainer />} />} />
        <Route path="/completed" render={() => <ContentContainer children={<NotesContainer />} />} />
        <Route path="/settings" render={() => <ContentContainer children={<Settings />} />} />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;