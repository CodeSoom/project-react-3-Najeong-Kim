import React from 'react';
import ResultContainer from './ResultContainer';

import Title from './styles/Title';

export default function ResultPage() {
  return (
    <div>
      <Title>Result</Title>
      <p>
        당신의 비타민 Y는 아래와 같습니다
        <br />
        짜잔~ 😁
      </p>
      <ResultContainer />
    </div>
  );
}
