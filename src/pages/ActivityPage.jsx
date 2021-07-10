import React from 'react';

import { useParams } from 'react-router-dom';

import resultData from '../data/resultData';

import { vitaminsImages } from '../assets/images';

import BackForm from '../forms/BackForm';

import Back from '../styles/Back';
import ActivityContainer from '../styles/ActivityContainer';
import RelatedList from '../styles/RelatedList';
import RelatedItem from '../styles/RelatedItem';

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
      <Back><BackForm /></Back>
      <ActivityContainer>
        <h2>{text}</h2>
        <img src={vitaminsImages[activityId.id]} alt="" />
        <p>
          {detail}
        </p>
        <RelatedList>
          <span>연관 비타민</span>
          {intro.map(({ id, text: relatedText }) => (
            <RelatedItem key={id}>
              {relatedText}
            </RelatedItem>
          ))}
        </RelatedList>
      </ActivityContainer>
    </div>
  );
}
