import React from 'react';

import { useSelector } from 'react-redux';

import ResultContainer from './ResultContainer';

import { get } from './utils';


import Title from './styles/Title';
import Text from './styles/Text';

export default function ResultPage() {
  const userName = useSelector(get('userName'));
  return (
    <div>
      <Title>Result</Title>
      <Text>
        {userName}님의 비타민 Y는 아래와 같습니다
      </Text>
      <ResultContainer />
      <Text>
        짜잔~ 😁
      </Text>
    </div>
  );
}
