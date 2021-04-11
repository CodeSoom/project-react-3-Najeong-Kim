import React from 'react';

import { Link } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';

import { illustrations } from '../assets/images';

import Container from '../styles/Container';
import VitaminButton from '../styles/VitaminButton';

export default function HomePage() {
  return (
    <Container>
      <img src={illustrations[1]} alt="" />
      <div>
        <h2>Vitamin Y</h2>
        <p className="homeText">
          당신의 비타민 Y를 찾아보세요
          <br />
          아래 비타민을 클릭하면
          <br />
          테스트를 시작할 수 있어요!
          <br />
          이름을 알려주실래요?
        </p>
        <HomeContainer />
        <VitaminButton><Link to="/intro"><i className="fas fa-tablets" /></Link></VitaminButton>
      </div>
    </Container>
  );
}
