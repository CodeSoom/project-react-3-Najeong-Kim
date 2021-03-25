import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import choiceData from './choiceData';

import ChoiceContainer from './ChoiceContainer';

export default function ChoicePage() {
  const { id } = useParams();
  const history = useHistory();
  const { question, choices } = choiceData[Number(id) - 1].text;

  function handleClick() {
    history.push(`/choice/${Number(id) + 1}`);
  }

  return (
    <div>
      <ChoiceContainer
        question={question}
        choices={choices}
        onClick={handleClick}
      />
    </div>
  );
}
