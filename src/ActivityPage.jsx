import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { get } from './utils';

export default function ActivityPage() {
  const activityId = useParams();
  const { text: { results } } = useSelector(get('result'));
  const selectActivity = results.find((activity) => (
    Number(activityId.id) === Number(activity.activityId)
  ));
  const { text, detail, intro } = selectActivity;

  return (
    <div>
      <Link to="/result">Back</Link>
      <h2>{text}</h2>
      <p>
        {detail}
      </p>
      <ul>
        <p>연관 비타민</p>
        {intro.map(({
          id, text,
        }) => (
          <li key={id}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
