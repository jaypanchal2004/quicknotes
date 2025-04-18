import React, { useState } from 'react';
import '../styles/NoteCard.scss';

function NoteCard({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(note.text);

  const handleSave = () => {
    onEdit(note.id, tempText);
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <textarea value={tempText} onChange={(e) => setTempText(e.target.value)} />
      ) : (
        <p>{note.text}</p>
      )}
      <div className="note-actions">
        {isEditing ? (
          <button className="btn btn-success" onClick={handleSave}>Save</button>
        ) : (
          <button className="btn btn-warning" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="btn btn-danger" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NoteCard;
