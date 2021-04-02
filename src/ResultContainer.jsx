import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { get } from './utils';

import { selectResult } from './actions';

const Container = styled.div({
  textAlign: 'center',
  backgroundColor: 'white',
});

const List = styled.ul({
  listStyle: 'none',
  margin: '0',
  padding: '10px',
  backgroundColor: 'white',
});

const Item = styled.li({
  backgroundColor: 'white',
});

const ResultItem = styled.p({
  backgroundColor: 'white',
  color: '#737B7D',
  fontSize: '18px',
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
                {text}
              </Link>
            </ResultItem>
          </Item>
        ))}
      </List>
    </Container>
  );
}
