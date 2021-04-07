import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import resultData from './resultData';

import { vitaminsImages } from './assets/images';

import styled from '@emotion/styled';

import Title from './styles/Title';
import Text from './styles/Text';
import Back from './styles/Back';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& img': {
    width: '200px',
    height: '200px',
  },
})

const List = styled.ul({
  listStyle: 'none',
  padding: '0',
  textAlign: 'center',
});

const Item = styled.li({
  backgroundColor: 'white',
  margin: '10px',
  padding: '10px',
});

export default function ActivityPage() {
  const activityId = useParams();
  const history = useHistory();

  const selectActivity = resultData.map(({ text: { results } }) => (results.find((activity) => (
    Number(activityId.id) === Number(activity.activityId)
  ))));

  const ACTIVITY_COUNT = 6;

  const { text, detail, intro } = selectActivity[parseInt((activityId.id - 1) / ACTIVITY_COUNT)];

  function handleClick() {
    return history.goBack();
  }

  return (
    <div>
      <Back><button type="button" onClick={handleClick}>Back</button></Back>
      <Title>{text}</Title>
      <Wrapper>
        <img src={vitaminsImages[activityId.id]} />
        <Text>
          {detail}
        </Text>
      </Wrapper>
      <List>
        <p>연관 비타민</p>
        {intro.map(({
          id, text,
        }) => (
          <Item key={id}>
            {text}
          </Item>
        ))}
      </List>
    </div>
  );
}
