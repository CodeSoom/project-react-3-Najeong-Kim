import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import HomeContainer from './HomeContainer';

describe('HomeContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('dfdfd', () => {
    const { queryByPlaceholderText } = render(<HomeContainer />);

    fireEvent.change(queryByPlaceholderText('이름을 입력하세요.'), {
      target: {
        value: '나정킴',
      },
    });

    expect(dispatch).toBeCalled();
  });
});
