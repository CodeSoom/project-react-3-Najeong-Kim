import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { Desktop, Mobile } from '../MediaQuery'

import styled from '@emotion/styled';

import { get } from '../utils';

import { illustrations } from '../assets/images';

import Container from '../styles/Container';
import MobileContainer from '../styles/MobileContainer';

const Start = styled.div({
  margin: '20px 0',
  textAlign: 'center',
  '& a': {
    fontSize: '25px',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#F2C94C',
    padding: '10px 18px',
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
      <Desktop>
        <Container>
          <img src={illustrations[1]} alt="" />
          <div>
            <h2>Intro</h2>
            <p className="introText">
              안녕하세요 {userName}
              님!
              <br />
              당신(You)만을 위한
              <br />
              비타민(Vitamin) 한 알을 준비했습니다
              <br />
              당신의 비타민 Y를 찾아보세요!
            </p>
            <Start><Link to="/choice/1">Start</Link></Start>
            <p className="introPlusText">
              비타민 Y는 당신의 삶에 행복을 주는 활동입니다
              <br />
              비타민 Y를 활동으로 생각하고 선택해주시면 됩니다
            </p>
          </div>
        </Container>
      </Desktop>
      <Mobile>
        <MobileContainer>
          <h2>Intro</h2>
          <div>
            <p className="introText">
              안녕하세요 {userName}
              님!
            </p>
            <img src={illustrations[1]} alt="" />
            <p className="introText">
              당신(You)만을 위한
              <br />
              비타민(Vitamin) 한 알을 준비했습니다
              <br />
              당신의 비타민 Y를 찾아보세요!
            </p>
            <Start><Link to="/choice/1">Start</Link></Start>
            <p className="introPlusText">
              비타민 Y는 당신의 삶에 행복을 주는 활동입니다
              <br />
              비타민 Y를 활동으로 생각하고 선택해주시면 됩니다
            </p>
          </div>
        </MobileContainer>
      </Mobile>
    </div>
  );
}
