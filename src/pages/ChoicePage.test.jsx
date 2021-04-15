import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import ChoicePage from './ChoicePage';

const mockHistory = { push: jest.fn() };

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return mockHistory;
  },
}));

jest.mock('react-responsive');

describe('ChoicePage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useMediaQuery.mockImplementation(() => true);
  });

  function renderChoicePage({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <Route exact path="/choice/:id" component={ChoicePage} />
      </MemoryRouter>
    ));
  }

  context('clicks a choice button when path is /choice/1', () => {
    it('listens click event', () => {
      const { queryAllByText } = renderChoicePage({ path: '/choice/1' });

      fireEvent.click(queryAllByText(/오랫동안/)[0]);

      expect((mockHistory.push)).toBeCalled();
    });
  });

  context('clicks a choice button when path is /choice/9', () => {
    it('listens click event', () => {
      const { queryAllByText } = renderChoicePage({ path: '/choice/9' });

      fireEvent.click(queryAllByText(/인생은/)[0]);

      expect((mockHistory.push)).toBeCalledWith('/result');
    });
  });
});
