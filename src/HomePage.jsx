import React from 'react';

import { Link } from 'react-router-dom';

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

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <Text>
        안녕하세요 여러분!
        <br />
        비타민 Y는 당신의 삶에 행복을 주는 활동입니다
        <br />
        비타민 Y를 활동으로 생각하고 선택해주시면 됩니다
        <br />
        당신의 비타민 Y를 찾아보세요!
        <br />
        (시작 전 새로고침을 한 번 해주세요!)
      </Text>
      <Start><Link to="/choice/1">Start</Link></Start>
    </div>
  );
}
