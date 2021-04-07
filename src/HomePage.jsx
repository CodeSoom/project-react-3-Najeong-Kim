import React from 'react';

import { Link } from 'react-router-dom';

import HomeContainer from './HomeContainer';

import styled from '@emotion/styled';

import { keyframes } from '@emotion/react'

import { illustrations } from './assets/images';

const Container = styled.div({
  display: 'grid',
  height: '80%',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: '1fr',
});

const BottleImg = styled.img({
  width: '90%',
  height: '80%',
  margin: 'auto',
});

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'space-around',
  margin: '15% 0',
});

const Title = styled.h2({
  color: '#FFB61D',
  fontSize: '70px',
  margin: '0',
});

const Text = styled.p({
  color: '#323232',
  fontSize: '25px',
  lineHeight: '50px',
});

const heartBeat = keyframes`
  0%{
    color: gainsboro;
    transform: none;
  }
  50%{
    color: #FFB61D;
    transform: rotateZ(20deg) scale(1.5);
  }
  100%{
    color: gainsboro;
    transform: none;
  }
`

const Start = styled.div({
  marginTop: '40px',
  textAlign: 'center',
  '& a': {
    fontSize: '60px',
    color: 'gainsboro',
    textDecoration: 'none',
    padding: '8px 15px',
    borderRadius: '10px',
    '& i:hover': {
      willChange: 'transform',
      animation: `${heartBeat} 1s linear infinite`,
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <BottleImg src={illustrations[1]} />
      <Wrapper>
        <Title>Vitamin Y</Title>
        <Text>
          당신의 비타민 Y를 찾아보세요
          <br />
          이름을 알려주실래요?
        </Text>
        <HomeContainer />
        <Start><Link to="/intro"><i className="fas fa-tablets"></i></Link></Start>
      </Wrapper>
    </Container>
  );
}
