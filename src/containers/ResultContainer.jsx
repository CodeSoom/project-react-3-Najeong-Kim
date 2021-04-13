import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { Desktop, Mobile } from '../MediaQuery'

import { vitaminsImages } from '../assets/images';

import { typesImages } from '../assets/images';

import { get } from '../utils';

import { selectResult } from '../actions';

import { List, MobileList } from '../styles/List';
import { Item, MobileItem } from '../styles/Item';
import { ResultItem, MobileResultItem } from '../styles/ResultItem';

const Container = styled.div({
  textAlign: 'center',
});

const Type = styled.div({
  '& img': {
    width: '300px',
    height: '250px',
    marginTop: '20px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
  },
  '& p': {
    fontSize: '25px',
  },
});

const MobileType = styled.div({
  '& img': {
    width: '60vw',
    height: '25vh',
    objectFit: 'cover',
    margin: '5% 0',
    borderRadius: '10px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
  },
  '& p': {
    fontSize: '18px',
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

  const userName = useSelector(get('userName'));

  return (
    <Container>
      <Desktop>
        <Type>
          <img src={typesImages[answer?.id]} alt="" />
          <p>
            {userName}님의 유형은 {answer?.text?.type}입니다
          <br />
            {answer?.text?.story}
            <br />
            {userName}님을 위한 비타민 Y가 제조되었습니다
        </p>
        </Type>
        <List>
          {answer?.text?.results.map(({ id, activityId, text }) => (
            <Item key={id}>
              <ResultItem>
                <Link to={`/activities/${activityId}`}>
                  <img src={vitaminsImages[activityId]} alt="" />
                  <span>{text}</span>
                </Link>
              </ResultItem>
            </Item>
          ))}
        </List>
      </Desktop>
      <Mobile>
        <MobileType>
          <img src={typesImages[answer?.id]} alt="" />
          <p>
            {userName}님의 유형은 {answer?.text?.type}입니다
          <br />
            {answer?.text?.story}
            <br />
            {userName}님을 위한 비타민 Y가 제조되었습니다
        </p>
        </MobileType>
        <MobileList>
          {answer?.text?.results.map(({ id, activityId, text }) => (
            <MobileItem key={id}>
              <MobileResultItem>
                <Link to={`/activities/${activityId}`}>
                  <img src={vitaminsImages[activityId]} alt="" />
                  <span>{text}</span>
                </Link>
              </MobileResultItem>
            </MobileItem>
          ))}
        </MobileList>
      </Mobile>
    </Container >
  );
}
