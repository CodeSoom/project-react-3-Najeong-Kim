import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
  });
  const handleClickClear = jest.fn();

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

      expect(container).toHaveTextContent('당신의');
    });
  });

  context('with path /intro', () => {
    it('renders the intro page', () => {
      const { container } = renderApp({ path: '/intro' });

      expect(container).toHaveTextContent('안녕하세요');
    });
  });

  context('with path /choice/:id', () => {
    it('renders the choice page', () => {
      const { container } = renderApp({ path: '/choice/1' });

      expect(container).toHaveTextContent('얼마나');
    });
  });

  context('with path /activities/:id', () => {
    it('renders the activity page', () => {
      const { container } = renderApp({ path: '/activities/1' });

      expect(container).toHaveTextContent('DIY');
    });
  });

  context('with path /activities', () => {
    it('renders the activities page', () => {
      const { container } = renderApp({ path: '/activities' });

      expect(container).toHaveTextContent('All');
    });
  });

  context('clicks header', () => {
    it('clears state', () => {
      const { getByTestId } = renderApp({ path: '/intro' });

      fireEvent.click(getByTestId('home'));

      expect(handleClickClear).toBeCalled();
    });
  });
});
