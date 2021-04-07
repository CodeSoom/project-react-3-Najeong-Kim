import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeUserName } from '../actions';

import { get } from '../utils';

import HomeForm from '../forms/HomeForm';

export default function HomeContainer() {
  const dispatch = useDispatch();

  const userName = useSelector(get('userName'));

  function handleChange({ name, value }) {
    dispatch(changeUserName({ name, value }));
  }

  return (
    <div>
      <HomeForm
        userName={userName}
        onChange={handleChange}
      />
    </div>
  );
}
