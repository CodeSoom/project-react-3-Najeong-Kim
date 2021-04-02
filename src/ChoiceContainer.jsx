import React from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { selectChoice } from './actions';

import Title from './styles/Title';
import List from './styles/List';
import Item from './styles/Item';
import ChoiceButton from './styles/ChoiceButton';

const Question = styled.h3({
  paddingLeft: '20px',
  paddingBottom: '10px',
  color: '#F2C94C',
  fontSize: '20px',
});

export default function ChoiceContainer({ question, choices, onChoiceClick }) {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectChoice(id));
    onChoiceClick();
  }

  return (
    <div>
      <Title>Choice</Title>
      <Question>{question}</Question>
      <List>
        {choices.map((choice) => (
          <Item key={choice.id}>
            <ChoiceButton
              type="button"
              onClick={() => handleClick(choice.id)}
            >
              {choice.text}
            </ChoiceButton>
          </Item>
        ))}
      </List>
    </div>
  );
}
