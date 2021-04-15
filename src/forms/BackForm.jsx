import React from 'react';

import { useHistory } from 'react-router-dom';

export default function BackForm() {
  const history = useHistory();

  function handleClick() {
    return history.goBack();
  }

  return (
    <button
      type="button"
      data-testid="back"
      onClick={handleClick}
    >
      <i className="fas fa-chevron-left" />
    </button>
  );
}
