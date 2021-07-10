import React from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { selectChoice } from '../actions';

import { choicesImages } from '../assets/images';

import Question from '../styles/Question';
import ChoiceList from '../styles/ChoiceList';
import ChoiceButton from '../styles/ChoiceButton';

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
      <ChoiceList>
        {choices.map((choice) => (
          <Item key={choice.id}>
            <ChoiceButton
              type="button"
              onClick={() => handleClick(choice.id)}
            >
              <div>
                <LazyLoadImage
                  alt=""
                  src={choicesImages[(choiceId - 1) * 2 + choice.id]}
                />
              </div>
              <p>{choice.text}</p>
            </ChoiceButton>
          </Item>
        ))}
      </ChoiceList>
    </div>
  );
}
