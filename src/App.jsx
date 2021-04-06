import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { clearSelects } from './actions';

import { GlobalStyle } from './globalStyle';
import HomePage from './HomePage';
import IntroPage from './IntroPage';
import ChoicePage from './ChoicePage';
import ResultPage from './ResultPage';
import ActivityPage from './ActivityPage';
import AllActivityPage from './AllActivityPage';

const Container = styled.div({
  width: '80%',
  position: 'absolute',
  top: '50px',
  left: '50%',
  transform: 'translate(-50%, 0)',
});

const Header = styled.header({
  textAlign: 'center',
  '& h1': {
    fontSize: '50px',
  },
  '& a': {
    color: '#F2C94C',
    textDecoration: 'none',
    '&:hover': {
      color: '#FFB61D',
    },
  },
});

export default function App() {
  const dispatch = useDispatch();

  function handleClickClear() {
    dispatch(clearSelects());
  }

  return (
    <Container>
      <Header>
        <h1><Link to="/" onClick={handleClickClear}>Vitamin Y</Link></h1>
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/intro" component={IntroPage} />
        <Route exact path="/choice/:id" component={ChoicePage} />
        <Route exact path="/result" component={ResultPage} />
        <Route exact path="/activity/:id" component={ActivityPage} />
        <Route exact path="/activities" component={AllActivityPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}
