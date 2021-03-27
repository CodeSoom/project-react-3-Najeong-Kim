import React from 'react';

import { useDispatch } from 'react-redux';

import { selectChoice } from './actions';

export default function ChoiceContainer({ question, choices, onChoiceClick }) {
  const dispatch = useDispatch();

  function handleClick(choiceId) {
    dispatch(selectChoice(choiceId));
    onChoiceClick();
  }

  return (
    <div>
      <h2>Choice</h2>
      <h3>{question}</h3>
      <ul>
        {choices.map((choice) => (
          <li key={choice.choiceId}>
            <button
              type="button"
              onClick={() => handleClick(choice.choiceId)}
            >
              {choice.choiceText}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
