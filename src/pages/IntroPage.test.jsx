import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import IntroPage from './IntroPage';

test('IntroPage', () => {
  render(
    (
      <MemoryRouter>
        <IntroPage />
      </MemoryRouter>
    ),
  );
});
