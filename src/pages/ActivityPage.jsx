import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import { Desktop, Mobile } from '../MediaQuery';

import styled from '@emotion/styled';

import resultData from '../data/resultData';

import { vitaminsImages } from '../assets/images';

import Back from '../styles/Back';

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  height: '70vh',
});

const MobileContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  textAlign: 'center',
  '& h2': {
    color: '#FFB61D',
    fontSize: '30px',
    margin: '0',
  },
  '& img': {
    width: '250px',
    height: '200px',
    objectFit: 'cover',
    margin: '5% auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
  },
  '& p': {
    margin: '5%',
    fontSize: '20px',
  },
});

const WrapperLeft = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5vh 0',
  '& h2': {
    color: '#FFB61D',
    fontSize: '40px',
    marginBottom: '20px',
  },
  '& div': {
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5vh',
  },
  '& img': {
    width: '35vw',
    maxWidth: '400px',
    height: '35vw',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
});

const WrapperRight = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '5vh 0',
  padding: '15px',
  '& > p': {
    paddingLeft: '10px',
    color: '#323232',
    fontSize: '22px',
    lineHeight: '35px',
  },
});

const List = styled.ul({
  listStyle: 'none',
  textAlign: 'center',
  backgroundColor: 'rgba(242, 201, 76, 0.2)',
  borderRadius: '10px',
  padding: '15px',
  fontSize: '25px',
});

const MobileList = styled.ul({
  listStyle: 'none',
  textAlign: 'center',
  backgroundColor: 'rgba(242, 201, 76, 0.2)',
  borderRadius: '10px',
  margin: '5%',
  padding: '10px',
  fontSize: '20px',
});

const Item = styled.li({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  margin: '10px',
  padding: '10px',
  borderRadius: '10px',
});

const MobileItem = styled.li({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  margin: '10px',
  padding: '10px',
  borderRadius: '10px',
});

const ACTIVITY_COUNT = 6;

export default function ActivityPage() {
  const activityId = useParams();
  const history = useHistory();

  const selectActivity = resultData.map(({ text: { results } }) => (results.find((activity) => (
    Number(activityId.id) === Number(activity.activityId)
  ))));

  const { text, detail, intro } = selectActivity[parseInt((activityId.id - 1) / ACTIVITY_COUNT)];

  function handleClick() {
    return history.goBack();
  }

  return (
    <div>
      <Desktop>
        <Back><button type="button" data-testid="back" onClick={handleClick}><i className="fas fa-chevron-left" /></button></Back>
        <Container>
          <WrapperLeft>
            <h2>{text}</h2>
            <div><img src={vitaminsImages[activityId.id]} alt="" /></div>
          </WrapperLeft>
          <WrapperRight>
            <p>
              {detail}
            </p>
            <List>
              연관 비타민
            {intro.map(({
              id, text,
            }) => (
              <Item key={id}>
                {text}
              </Item>
            ))}
            </List>
          </WrapperRight>
        </Container>
      </Desktop>
      <Mobile>
        <Back><button type="button" data-testid="back" onClick={handleClick}><i className="fas fa-chevron-left" /></button></Back>
        <MobileContainer>
          <h2>{text}</h2>
          <img src={vitaminsImages[activityId.id]} alt="" />
          <p>
            {detail}
          </p>
          <MobileList>
            연관 비타민
            {intro.map(({
            id, text,
          }) => (
            <MobileItem key={id}>
              {text}
            </MobileItem>
          ))}
          </MobileList>
        </MobileContainer>
      </Mobile>
    </div>
  );
}
