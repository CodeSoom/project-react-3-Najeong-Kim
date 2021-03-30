import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import styled from '@emotion/styled';
import { GlobalStyle } from './globalStyle';
import HomePage from './HomePage';
import ChoicePage from './ChoicePage';
import ResultPage from './ResultPage';

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
  return (
    <Container>
      <Header>
        <h1><Link to="/">Vitamin Y</Link></h1>
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/choice/:id" component={ChoicePage} />
        <Route exact path="/result" component={ResultPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}
