import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import ChoicePage from './ChoicePage';

const mockHistory = { push: jest.fn() };

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return mockHistory;
  },
}));

describe('ChoicePage', () => {
  function renderChoicePage({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <ChoicePage />
      </MemoryRouter>
    ));
  }

  context('clicks a choice button', () => {
    it('listens click event', () => {
      const { getByText } = renderChoicePage({ path: '/choice/1' });

      fireEvent.click(getByText(/실내에서/));

      expect((mockHistory.push)).toBeCalled();
    });
  });
});
