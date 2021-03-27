import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import ChoiceContainer from './ChoiceContainer';

import choiceData from '../fixtures/choiceData';

describe('ChoiceContainer', () => {
  const dispatch = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderChoiceContainer({ question, choices } = {}) {
    return render(
      <ChoiceContainer
        question={question}
        choices={choices}
        onChoiceClick={handleClick}
      />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('clicks a choice button', () => {
    it('listens click event', () => {
      const { getByText } = renderChoiceContainer(choiceData[0].text);

      fireEvent.click(getByText('1번 선택'));
      expect(handleClick).toBeCalled();
    });
  });
});
