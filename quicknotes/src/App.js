import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id, newText) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, text: newText } : note)));
  };

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <NoteInput addNote={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
