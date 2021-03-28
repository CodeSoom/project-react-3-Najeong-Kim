import React from 'react';

import { useDispatch } from 'react-redux';

import { selectChoice } from './actions';

import styled from '@emotion/styled';

import Title from './styles/Title';

const Question = styled.h3({
  paddingLeft: '20px',
  paddingBottom: '10px',
  color: '#F2C94C',
  fontSize: '20px',
})

export default function ChoiceContainer({ question, choices, onChoiceClick }) {
  const dispatch = useDispatch();

  function handleClick(choiceId) {
    dispatch(selectChoice(choiceId));
    onChoiceClick();
  }

  return (
    <div>
      <Title>Choice</Title>
      <Question>{question}</Question>
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
