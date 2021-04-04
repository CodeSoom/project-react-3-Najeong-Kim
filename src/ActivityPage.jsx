import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import Title from './styles/Title';
import Text from './styles/Text';

import { get } from './utils';

const Back = styled.div({
  position: 'fixed',
  right: '10px',
  '& a': {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#F2C94C',
  }
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
  const { text: { results } } = useSelector(get('result'));
  const selectActivity = results.find((activity) => (
    Number(activityId.id) === Number(activity.activityId)
  ));
  const { text, detail, intro } = selectActivity;

  return (
    <div>
      <Back><Link to="/result">Back</Link></Back>
      <Title>{text}</Title>
      <Text>
        {detail}
      </Text>
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
