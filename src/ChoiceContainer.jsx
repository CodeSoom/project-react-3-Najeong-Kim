import React from 'react';

export default function ChoiceContainer({ question, choices, onClick }) {
  return (
    <div>
      <h2>Choice</h2>
      <h3>{question}</h3>
      <ul>
        {choices?.map((choice) => (
          <li key={choice.id}>
            <button
              type="button"
              onClick={onClick}
            >
              {choice.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
