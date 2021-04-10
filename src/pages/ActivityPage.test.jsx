import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter, Route } from 'react-router-dom';

import ActivityPage from './ActivityPage';

describe('ActivityPage', () => {
  const handleClick = jest.fn();

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

  context('clicks go back icon', () => {
    it('listens go back event', () => {
      const { getByTestId } = renderActivityPage({ path: '/activities/1' });

      fireEvent.click(getByTestId('back'));

      expect(handleClick).toBeCalled();
    });
  });
});
