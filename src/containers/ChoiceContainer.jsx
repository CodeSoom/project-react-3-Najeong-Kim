import React from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { selectChoice } from '../actions';

import { choicesImages } from '../assets/images';

import ChoiceButton from '../styles/ChoiceButton';

const Question = styled.h3({
  margin: '5% 0',
  textAlign: 'center',
  fontSize: '40px',
});

const List = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

const Item = styled.li({
  margin: '5%',
});

export default function ChoiceContainer({
  choiceId, question, choices, onChoiceClick,
}) {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectChoice(id));
    onChoiceClick();
  }

  return (
    <div>
      <Question>{question}</Question>
      <List>
        {choices.map((choice) => (
          <Item key={choice.id}>
            <ChoiceButton
              type="button"
              onClick={() => handleClick(choice.id)}
            >
              <div><img src={choicesImages[(choiceId - 1) * 2 + choice.id]} alt="" /></div>
              <p>{choice.text}</p>
            </ChoiceButton>
          </Item>
        ))}
      </List>
    </div>
  );
}
