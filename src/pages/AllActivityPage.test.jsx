import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter, Route } from 'react-router-dom';

import AllActivityPage from './AllActivityPage';

describe('AllActivityPage', () => {
  const handleClick = jest.fn();

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

  context('clicks go back icon', () => {
    it('listens go back event', () => {
      const { getByTestId } = renderAllActivityPage({ path: '/activities' });

      fireEvent.click(getByTestId('back'));

      expect(handleClick).toBeCalled();
    });
  });
});
