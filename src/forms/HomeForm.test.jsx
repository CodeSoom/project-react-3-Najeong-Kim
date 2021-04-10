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

  const { queryByRole } = renderHomeForm();


  it('listens change event', () => {
    fireEvent.change(queryByRole('input'), {
      target: { value: '나정' },
    });

    expect(handleChange).toBeCalled();
  })


});