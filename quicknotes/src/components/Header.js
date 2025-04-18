import React from 'react';
import '../styles/Header.scss';

function Header({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="app-header">
      <h1>📝 QuickNotes</h1>
      <button onClick={toggleTheme} className="btn btn-toggle">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}

export default Header;
