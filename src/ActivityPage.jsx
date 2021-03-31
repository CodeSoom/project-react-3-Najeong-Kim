import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get } from './utils';

export default function ActivityPage() {
  const activityId = useParams();
  const { text: { results } } = useSelector(get('result'));
  const selectActivity = results.find(activity => Number(activityId.id) === Number(activity.activityId))
  const { resultText, resultDetail, resultIntro } = selectActivity;

  return (
    <div>
      <h2>{resultText}</h2>
      <p>{resultDetail}</p>
      <ul>
        {resultIntro.map(({ introId, introLink, introType, introText }) => (
          <li key={introId}>
            {introLink}
            {introType}
            {introText}
          </li>
        ))}
      </ul>
    </div>
  );
}
