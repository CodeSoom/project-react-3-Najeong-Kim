import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import choiceData from '../data/choiceData';

import ChoiceContainer from '../containers/ChoiceContainer';

import ProgressForm from '../forms/ProgressForm';

export default function ChoicePage() {
  const { id } = useParams();
  const history = useHistory();
  const { question, choices } = choiceData[Number(id) - 1].text;

  function handleClick() {
    if (Number(id) < 9) {
      return history.push(`/choice/${Number(id) + 1}`);
    }
    return history.push('/result');
  }

  return (
    <div>
      <ChoiceContainer
        choiceId={id}
        question={question}
        choices={choices}
        onChoiceClick={handleClick}
      />
      <ProgressForm
        id={id}
      />
    </div>
  );
}
