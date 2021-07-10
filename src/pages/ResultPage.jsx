import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import ResultContainer from '../containers/ResultContainer';

import Title from '../styles/Title';
import Text from '../styles/Text';
import More from '../styles/More';

import { get } from '../utils';

export default function ResultPage() {
  const userName = useSelector(get('userName'));

  return (
    <div>
      <Title>Result</Title>
      <Text>
        {userName}
        님의 비타민 Y는 아래와 같습니다! 짜잔~ 😁
      </Text>
      <ResultContainer />
      <More>
        <Link to="/activities">
          더 많은 비타민 보기
        </Link>
      </More>
    </div>
  );
}
