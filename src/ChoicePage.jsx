import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import ChoiceContainer from './ChoiceContainer';

export default function ChoicePage() {
  const { id } = useParams();
  const history = useHistory();

  function handleClick() {
    history.push(`/choice/${Number(id) + 1}`);
  }

  return (
    <div>
      <ChoiceContainer onClick={handleClick} />
    </div>
  );
}
