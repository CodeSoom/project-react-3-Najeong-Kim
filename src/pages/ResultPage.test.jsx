import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ResultPage from './ResultPage';

jest.mock('react-redux');

describe('ResultPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    result: { id: 1, text: { results: [{ id: 1, text: '1번 결과' }] } },
    selects: [1, 1, 1, 1, 1, 1, 1, 1, 1],
  }));

  it('renders ResultPage', () => {
    const { container } = render(
      <MemoryRouter>
        <ResultPage />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('1번 결과');
  });
});
