import React from 'react';

// Composant Option
function Option({ label, isActive, onClick }) {
  return (
    <div
      className={`option ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

// Composant Row
function SettingsRow({ title, options, selected, onChange }) {
  return (
    <div className="row">
      <div className="title">{title}</div>
      <div className="options">
        {options.map((option) => (
          <Option
            key={option}
            label={option}
            isActive={selected === option}
            onClick={() => onChange(option)}
          />
        ))}
      </div>
    </div>
  );
}

export default SettingsRow;