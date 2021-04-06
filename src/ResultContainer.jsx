import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { vitaminsImages } from './assets/images';

import styled from '@emotion/styled';

import { get } from './utils';

import { selectResult } from './actions';

const Container = styled.div({
  textAlign: 'center',
});

const List = styled.ul({
  listStyle: 'none',
  padding: '0',
});

const Item = styled.li({
  backgroundColor: 'white',
  margin: '10px',
  padding: '5px',
  '&:hover': {
    boxShadow: '0px 0px 5px 1px rgba(0, 0, 0, 0.07)',
  },
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

export function calculateResult(selects, result, number, points) {
  if (selects[points[0]] + selects[points[1]] + selects[points[2]] < 5) {
    return result[number] = 'A';
  }

  return result[number] = 'B';
}

export function selectResultCase(type) {
  const match = {
    AAA: 1,
    AAB: 2,
    ABA: 3,
    ABB: 4,
    BAA: 5,
    BAB: 6,
    BBA: 7,
    BBB: 8,
  };

  return match[type.join('')];
}

export default function ResultContainer() {
  const dispatch = useDispatch();
  const selects = useSelector(get('selects'));
  const answer = useSelector(get('result'));
  const result = [];
  const resultCase = [[0, 3, 6], [2, 5, 7], [1, 4, 8]];

  resultCase.forEach((item, index) => {
    calculateResult(selects, result, index, item);
  });

  useEffect(() => {
    dispatch(selectResult(selectResultCase(result)));
  }, []);

  return (
    <Container>
      <List>
        {answer?.text?.results.map(({ id, activityId, text }) => (
          <Item key={id}>
            <ResultItem>
              <Link to={`/activity/${activityId}`}>
                <img src={vitaminsImages[activityId]} />
                <span>{text}</span>
              </Link>
            </ResultItem>
          </Item>
        ))}
      </List>
      <Link to={'/activities'}>
        <span>See more</span>
      </Link>
    </Container>
  );
}
