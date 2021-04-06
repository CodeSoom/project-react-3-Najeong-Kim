import React from 'react';

import { Link } from 'react-router-dom';

import resultData from './resultData';

import { vitaminsImages } from './assets/images';

import styled from '@emotion/styled';

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
