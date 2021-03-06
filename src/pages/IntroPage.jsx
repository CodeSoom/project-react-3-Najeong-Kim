import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from '../utils';

import { illustrations } from '../assets/images';

import Container from '../styles/Container';
import StartButton from '../styles/StartButton';

export default function IntroPage() {
  const userName = useSelector(get('userName'));

  return (
    <div>
      <Container>
        <h2>Intro</h2>
        <div>
          <p className="introText">
            안녕하세요 {userName}
            님!
          </p>
          <p className="introPlusText">
            비타민 Y는 당신의 삶에 행복을 주는 활동입니다
            <br />
            비타민 Y를 활동으로 생각하고 선택해주시면 됩니다
          </p>
          <img src={illustrations[1]} alt="" />
          <p className="introText">
            당신(You)만을 위한
            <br />
            비타민(Vitamin) 한 알을 준비했습니다
            <br />
            당신의 비타민 Y를 찾아보세요!
          </p>
          <StartButton><Link to="/choice/1">Start</Link></StartButton>
        </div>
      </Container>
    </div>
  );
}
