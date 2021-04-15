import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter, Route } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import ActivityPage from './ActivityPage';

jest.mock('react-responsive');

describe('ActivityPage', () => {
  beforeEach(() => {
    useMediaQuery.mockImplementation(() => true);
  });

  function renderActivityPage({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <Route exact path="/activities/:id" component={ActivityPage} />
      </MemoryRouter>
    ));
  }

  it('renders ActivityPage', () => {
    const { container } = renderActivityPage({ path: '/activities/1' });

    expect(container).toHaveTextContent('DIY');
  });
});
