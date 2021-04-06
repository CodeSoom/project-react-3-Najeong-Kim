import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from './utils';

import styled from '@emotion/styled';

import Title from './styles/Title';
import Text from './styles/Text';

const Start = styled.div({
  marginTop: '40px',
  textAlign: 'center',
  '& a': {
    fontSize: '25px',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#F2C94C',
    padding: '8px 15px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#FFB61D',
    },
  },
});

export default function IntroPage() {

  const userName = useSelector(get('userName'));

  return (
    <div>
      <Title>Intro</Title>
      <Text>
        안녕하세요 {userName}님!
        <br />
        당신(You)만을 위한
        <br />
        비타민(Vitamin) 한 알을 준비했습니다
        <br />
        비타민 Y는 당신의 삶에 행복을 주는 활동입니다
        <br />
        비타민 Y를 활동으로 생각하고 선택해주시면 됩니다
        <br />
        당신의 비타민 Y를 찾아보세요!
      </Text>
      <Start><Link to="/choice/1">Start</Link></Start>
    </div>
  );
}
