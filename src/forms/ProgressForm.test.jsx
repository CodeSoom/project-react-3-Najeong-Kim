import React from 'react';

import { render } from '@testing-library/react';

import ProgressForm from './ProgressForm';

describe('ProgressForm', () => {
  it('renders ProgressForm', () => {
    const id = 1;

    const { container } = render((
      <ProgressForm
        id={id}
      />
    ));

    expect(container).toHaveTextContent('1');
    expect(container).toHaveTextContent('9');
  })


});