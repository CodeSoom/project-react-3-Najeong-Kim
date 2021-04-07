import React from 'react';

import { Link } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';

import styled from '@emotion/styled';

import { keyframes } from '@emotion/react'

import { illustrations } from '../assets/images';

import Container from '../styles/Container';

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
      <img src={illustrations[1]} />
      <div>
        <h2>Vitamin Y</h2>
        <p className="homeText">
          당신의 비타민 Y를 찾아보세요
          <br />
          이름을 알려주실래요?
        </p>
        <HomeContainer />
        <Start><Link to="/intro"><i className="fas fa-tablets"></i></Link></Start>
      </div>
    </Container>
  );
}
