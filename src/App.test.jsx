import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { useMediaQuery } from 'react-responsive';

import App from './App';

jest.mock('react-responsive');

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useMediaQuery.mockImplementation(() => true);
  });

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
      const { container, getAllByTestId } = renderApp({ path: '/intro' });

      fireEvent.click(getAllByTestId('home')[0]);

      expect(container).toHaveTextContent(/이름을/);
    });
  });
});
