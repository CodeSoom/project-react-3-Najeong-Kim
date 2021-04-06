import React from 'react';

import { Link } from 'react-router-dom';

import resultData from './resultData';

import { vitaminsImages } from './assets/images';

import styled from '@emotion/styled';

import Title from './styles/Title';

const Back = styled.div({
  position: 'fixed',
  right: '10px',
  '& a': {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#F2C94C',
  }
})

const List = styled.ul({
  listStyle: 'none',
  padding: '0',
  textAlign: 'center',
});

const Item = styled.li({
  backgroundColor: 'white',
  margin: '10px',
  padding: '10px',
});

const ResultItem = styled.p({
  backgroundColor: 'white',
  margin: '10px 0',
  fontSize: '18px',
  '& a': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    textDecoration: 'none',
    color: '#737B7D',
  },
  '& img': {
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
  '& span': {
    backgroundColor: 'white',
  },
});

export default function AllActivityPage() {
  return (
    <div>
      <Back><Link to="/result">Back</Link></Back>
      <Title>All Vitamins</Title>
      <List>
        {resultData.map(({ text: { results } }) => (
          results.map(({ activityId, text }) => (
            <Item key={activityId}>
              <ResultItem>
                <Link to={`/activity/${activityId}`}>
                  <img src={vitaminsImages[activityId]} />
                  <span>{text}</span>
                </Link>
              </ResultItem>
            </Item>
          ))))}
      </List>
    </div>
  );
}
