import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import { Desktop, Mobile } from '../styles/MediaQuery';

import resultData from '../data/resultData';

import { vitaminsImages } from '../assets/images';

import Back from '../styles/Back';
import { ActivityContainer, ActivityMobileContainer } from '../styles/ActivityContainer';
import { WrapperLeft, WrapperRight } from '../styles/Wrapper';
import { RelatedList, RelatedMobileList } from '../styles/RelatedList.jsx';
import { RelatedItem, RelatedMobileItem } from '../styles/RelatedItem';

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
        <ActivityContainer>
          <WrapperLeft>
            <h2>{text}</h2>
            <div><img src={vitaminsImages[activityId.id]} alt="" /></div>
          </WrapperLeft>
          <WrapperRight>
            <p>
              {detail}
            </p>
            <RelatedList>
              연관 비타민
            {intro.map(({
              id, text,
            }) => (
              <RelatedItem key={id}>
                {text}
              </RelatedItem>
            ))}
            </RelatedList>
          </WrapperRight>
        </ActivityContainer>
      </Desktop>
      <Mobile>
        <Back><button type="button" data-testid="back" onClick={handleClick}><i className="fas fa-chevron-left" /></button></Back>
        <ActivityMobileContainer>
          <h2>{text}</h2>
          <img src={vitaminsImages[activityId.id]} alt="" />
          <p>
            {detail}
          </p>
          <RelatedMobileList>
            연관 비타민
            {intro.map(({
            id, text,
          }) => (
            <RelatedMobileItem key={id}>
              {text}
            </RelatedMobileItem>
          ))}
          </RelatedMobileList>
        </ActivityMobileContainer>
      </Mobile>
    </div>
  );
}
