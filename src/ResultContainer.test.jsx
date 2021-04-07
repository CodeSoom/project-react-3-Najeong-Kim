import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import ResultContainer, { calculateResult, selectResultCase } from './ResultContainer';

describe('ResultContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    jest.clearAllMocks();
  });

  it('calculates result A', () => {
    expect(calculateResult([1, 1, 1, 1, 1, 1, 1, 1, 1], [], 1, [0, 3, 6])).toEqual('A');
  });

  it('calculates result B', () => {
    expect(calculateResult([2, 2, 2, 2, 2, 2, 2, 2, 2], [], 1, [0, 3, 6])).toEqual('B');
  });

  it('selects result case', () => {
    expect(selectResultCase(['A', 'A', 'A'])).toEqual(1);
  });

  it('renders ResultContainer', () => {
    render(
      <ResultContainer />,
    );

    expect(dispatch).toBeCalled();
  });
});
