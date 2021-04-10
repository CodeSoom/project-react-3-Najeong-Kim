import React from 'react';

import { useHistory, Link } from 'react-router-dom';

import styled from '@emotion/styled';

import resultData from '../data/resultData';

import { vitaminsImages } from '../assets/images';

import Title from '../styles/Title';
import Back from '../styles/Back';
import List from '../styles/List';
import Item from '../styles/Item';
import ResultItem from '../styles/ResultItem';

const Container = styled.div({
  textAlign: 'center',
});

export default function AllActivityPage() {
  const history = useHistory();

  function handleClick() {
    return history.goBack();
  }
  return (
    <Container>
      <Back><button type="button" data-testid="back" onClick={handleClick}><i className="fas fa-chevron-left" /></button></Back>
      <Title>All Vitamins</Title>
      <List>
        {resultData.map(({ text: { results } }) => (
          results.map(({ activityId, text }) => (
            <Item key={activityId}>
              <ResultItem>
                <Link to={`/activities/${activityId}`}>
                  <img src={vitaminsImages[activityId]} alt="" />
                  <span>{text}</span>
                </Link>
              </ResultItem>
            </Item>
          ))))}
      </List>
    </Container>
  );
}
