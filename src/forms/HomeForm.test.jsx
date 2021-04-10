import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import HomeForm from './HomeForm';

describe('HomeForm', () => {
  const handleChange = jest.fn();

  function renderHomeForm({ userName } = {}) {
    return render(
      <HomeForm
        userName={userName}
        onChange={handleChange}
      />,
    );
  }

  const { queryByPlaceholderText } = renderHomeForm();

  it('listens change event', () => {
    fireEvent.change(queryByPlaceholderText('이름을 입력하세요.'), {
      target: { value: '나정' },
    });

    expect(handleChange).toBeCalled();
  });
});
