import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter, Route } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import AllActivityPage from './AllActivityPage';

jest.mock('react-responsive');

describe('AllActivityPage', () => {
  beforeEach(() => {
    useMediaQuery.mockImplementation(() => true);
  });

  function renderAllActivityPage({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <Route exact path="/activities" component={AllActivityPage} />
      </MemoryRouter>
    ));
  }

  it('renders ActivityPage', () => {
    const { container } = renderAllActivityPage({ path: '/activities' });

    expect(container).toHaveTextContent('DIY');
  });
});
