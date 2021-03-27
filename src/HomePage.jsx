import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        안녕하세요 여러분!
        <br />
        비타민 Y는 당신의 삶에 행복을 주는 활동입니다
        <br />
        비타민 Y를 활동으로 생각하고 선택해주시면 됩니다
        <br />
        당신의 비타민 Y를 찾아보세요!
        <br />
        (시작 전 새로고침을 한 번 해주세요!)
      </p>
      <Link to="/choice/1">Start</Link>
    </div>
  );
}
