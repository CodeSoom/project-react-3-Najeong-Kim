import React from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { selectChoice } from '../actions';

import { choicesImages } from '../assets/images';

import { Desktop, Mobile } from '../styles/MediaQuery';

import { Question, MobileQuestion } from '../styles/Question';
import { ChoiceList, ChoiceMobileList } from '../styles/ChoiceList';
import { ChoiceButton, MobileChoiceButton } from '../styles/ChoiceButton';

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
      <Desktop>
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
      </Desktop>
      <Mobile>
        <MobileQuestion>{question}</MobileQuestion>
        <ChoiceMobileList>
          {choices.map((choice) => (
            <Item key={choice.id}>
              <MobileChoiceButton
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
              </MobileChoiceButton>
            </Item>
          ))}
        </ChoiceMobileList>
      </Mobile>
    </div>
  );
}
