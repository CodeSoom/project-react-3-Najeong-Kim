import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import ResultContainer from '../containers/ResultContainer';

import { get } from '../utils';

import styled from '@emotion/styled';

const Title = styled.h2({
  margin: '1% 0',
  textAlign: 'center',
  fontSize: '40px',
});

const Text = styled.p({
  margin: '10px 0',
  color: 'gray',
  textAlign: 'center',
  fontSize: '25px',
});

const More = styled.div({
  marginTop: '20px',
  textAlign: 'center',
  '& a': {
    color: 'white',
    textDecoration: 'none',
    fontSize: '30px',
    backgroundColor: '#F2C94C',
    padding: '10px 18px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#FFB61D',
    },
  },
});

export default function ResultPage() {
  const userName = useSelector(get('userName'));
  return (
    <div>
      <Title>Result</Title>
      <Text>
        {userName}님의 비타민 Y는 아래와 같습니다! 짜잔~ 😁
      </Text>
      <ResultContainer />
      <More>
        <Link to={'/activities'}>
          더 많은 비타민 보기
        </Link>
      </More>
    </div>
  );
}
