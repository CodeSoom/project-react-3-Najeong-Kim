import React from 'react';
import ResultContainer from './ResultContainer';

import Title from './styles/Title';
import Text from './styles/Text';

export default function ResultPage() {
  return (
    <div>
      <Title>Result</Title>
      <Text>
        당신의 비타민 Y는 아래와 같습니다
      </Text>
      <ResultContainer />
      <Text>
        짜잔~ 😁
      </Text>
    </div>
  );
}
