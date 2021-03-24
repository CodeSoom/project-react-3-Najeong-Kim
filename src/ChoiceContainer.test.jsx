import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ChoiceContainer from './ChoiceContainer';

describe('ChoicePage', () => {
  const handleClick = jest.fn();

  function renderChoiceContainer() {
    return render(<ChoiceContainer onClick={handleClick} />);
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('clicks a choice button', () => {
    it('listens click event', () => {
      const { getByText } = renderChoiceContainer();

      fireEvent.click(getByText(/실내에서/));
      expect(handleClick).toBeCalled();
    });
  });
});
