import React, { useState } from 'react';
import { isEmpty, isTooLong } from '../utils/validators';
import '../styles/NoteInput.scss';

function NoteInput({ addNote }) {
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (isEmpty(note)) {
      setError('Note cannot be empty.');
    } else if (isTooLong(note)) {
      setError('Note cannot exceed 200 characters.');
    } else {
      addNote(note);
      setNote('');
      setError('');
    }
  };

  return (
    <div className="note-input">
      <textarea
        placeholder="Write your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button className="btn btn-primary" onClick={handleAdd}>Add Note</button>
    </div>
  );
}

export default NoteInput;
