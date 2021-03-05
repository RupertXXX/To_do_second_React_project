import React from 'react';
import Menu from './components/menu/menu';
import AddNote from './components/addNote/addNote';
import Notes from './components/notes/notes';
import c from './App.module.css';

function App() {
  return (
    <div className={c.App} >
      <Menu />
      <Notes />
      <AddNote />
    </div>
  );
}

export default App;