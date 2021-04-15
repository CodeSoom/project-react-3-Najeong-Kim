import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import ChoiceContainer from './ChoiceContainer';

import choiceData from '../../fixtures/choiceData';

jest.mock('react-responsive');

describe('ChoiceContainer', () => {
  const dispatch = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useMediaQuery.mockImplementation(() => true);

    jest.clearAllMocks();
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

  context('clicks a choice button in desktop', () => {
    it('listens click event', () => {
      const { queryAllByText } = renderChoiceContainer(choiceData[0].text);
      fireEvent.click(queryAllByText('1번 선택')[0]);
      expect(handleClick).toBeCalled();
      expect(dispatch).toBeCalled();
    });
  });

  context('clicks a choice button in mobile', () => {
    it('listens click event', () => {
      const { queryAllByText } = renderChoiceContainer(choiceData[0].text);
      fireEvent.click(queryAllByText('1번 선택')[1]);
      expect(handleClick).toBeCalled();
      expect(dispatch).toBeCalled();
    });
  });
});
