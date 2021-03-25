import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render(
      (
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      ),
    );
  }
  context('with path /', () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /choice/:id', () => {
    it('renders the choice page', () => {
      const { container } = renderApp({ path: '/choice/1' });

      expect(container).toHaveTextContent('Choice');
    });
  });
});
