import React from 'react';

import styled from '@emotion/styled';

const Progress = styled.div({
  marginTop: '2vh',
  textAlign: 'center',
  fontSize: '25px',
});

export default function ProgressForm({ id }) {
  const CHOICE_COUNT = 9;

  return (
    <Progress>
      {id} / {CHOICE_COUNT}
    </Progress>
  );
}
