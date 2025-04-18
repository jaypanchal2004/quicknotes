import React from 'react';
import NoteCard from './NoteCard';
import '../styles/NoteList.scss';

function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? <p>No notes yet.</p> : (
        notes.map(note => (
          <NoteCard key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
        ))
      )}
    </div>
  );
}

export default NoteList;
