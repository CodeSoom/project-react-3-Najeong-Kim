import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import BackForm from './BackForm';

const mockHistory = { goBack: jest.fn() };

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return mockHistory;
  },
}));

describe('BackForm', () => {
  const handleClick = jest.fn();

  function renderBackForm() {
    return render(
      <BackForm
        onClick={handleClick}
      />,
    );
  }

  it('listens go back event', () => {
    const { queryByTestId } = renderBackForm();

    fireEvent.click(queryByTestId('back'));

    expect((mockHistory.goBack)).toBeCalled();
  });
});
