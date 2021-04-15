import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { Desktop, Mobile } from './styles/MediaQuery';

import { clearSelects } from './actions';

import { GlobalStyle } from './styles/globalStyle';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import ChoicePage from './pages/ChoicePage';
import ResultPage from './pages/ResultPage';
import ActivityPage from './pages/ActivityPage';
import AllActivityPage from './pages/AllActivityPage';

import Header from './styles/Header';

const Container = styled.div({
  width: '95%',
  height: '90vh',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
});

export default function App() {
  const dispatch = useDispatch();

  function handleClickClear() {
    dispatch(clearSelects());
  }

  return (
    <Container>
      <Desktop>
        <Header>
          <span />
          <h1>Vitamin Y</h1>
          <Link to="/" data-testid="home" onClick={handleClickClear}><i className="fas fa-home" /></Link>
        </Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/intro" component={IntroPage} />
          <Route exact path="/choice/:id" component={ChoicePage} />
          <Route exact path="/result" component={ResultPage} />
          <Route exact path="/activities/:id" component={ActivityPage} />
          <Route exact path="/activities" component={AllActivityPage} />
        </Switch>
      </Desktop>
      <Mobile>
        <Header>
          <span />
          <h1>Vitamin Y</h1>
          <Link to="/" data-testid="home" onClick={handleClickClear}><i className="fas fa-home" /></Link>
        </Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/intro" component={IntroPage} />
          <Route exact path="/choice/:id" component={ChoicePage} />
          <Route exact path="/result" component={ResultPage} />
          <Route exact path="/activities/:id" component={ActivityPage} />
          <Route exact path="/activities" component={AllActivityPage} />
        </Switch>
      </Mobile>
      <GlobalStyle />
    </Container>
  );
}
