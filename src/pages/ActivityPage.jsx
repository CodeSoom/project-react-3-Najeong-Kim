import React from 'react';

import { useParams } from 'react-router-dom';

import { Desktop, Mobile } from '../styles/MediaQuery';

import resultData from '../data/resultData';

import { vitaminsImages } from '../assets/images';

import BackForm from '../forms/BackForm';

import Back from '../styles/Back';
import { ActivityContainer, ActivityMobileContainer } from '../styles/ActivityContainer';
import { WrapperLeft, WrapperRight } from '../styles/Wrapper';
import { RelatedList, RelatedMobileList } from '../styles/RelatedList';
import { RelatedItem, RelatedMobileItem } from '../styles/RelatedItem';

const ACTIVITY_COUNT = 6;

export default function ActivityPage() {
  const activityId = useParams();

  const selectActivity = resultData.map(({ text: { results } }) => (results.find((activity) => (
    Number(activityId.id) === Number(activity.activityId)
  ))));

  const { text, detail, intro } = selectActivity[parseInt(
    (activityId.id - 1) / ACTIVITY_COUNT, 10,
  )];

  return (
    <div>
      <Desktop>
        <Back><BackForm /></Back>
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
              <p>연관 비타민</p>
              {intro.map(({ id, text: relatedText }) => (
                <RelatedItem key={id}>{relatedText}</RelatedItem>
              ))}
            </RelatedList>
          </WrapperRight>
        </ActivityContainer>
      </Desktop>
      <Mobile>
        <Back><BackForm /></Back>
        <ActivityMobileContainer>
          <h2>{text}</h2>
          <img src={vitaminsImages[activityId.id]} alt="" />
          <p>
            {detail}
          </p>
          <RelatedMobileList>
            <p>연관 비타민</p>
            {intro.map(({ id, text: relatedText }) => (
              <RelatedMobileItem key={id}>
                {relatedText}
              </RelatedMobileItem>
            ))}
          </RelatedMobileList>
        </ActivityMobileContainer>
      </Mobile>
    </div>
  );
}
