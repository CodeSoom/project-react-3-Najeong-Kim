import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import HomeContainer from './HomeContainer';

describe('HomeContainer', () => {
  const dispatch = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });



  it('listens change event', () => {

  })
})