import React from 'react';

import { useDispatch } from 'react-redux';

import { selectChoice } from './actions';

import Title from './styles/Title';

export default function ChoiceContainer({ question, choices, onChoiceClick }) {
  const dispatch = useDispatch();

  function handleClick(choiceId) {
    dispatch(selectChoice(choiceId));
    onChoiceClick();
  }

  return (
    <div>
      <Title>Choice</Title>
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
