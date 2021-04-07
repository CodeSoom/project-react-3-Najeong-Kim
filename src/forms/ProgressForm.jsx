import React from 'react';

import styled from '@emotion/styled';

const Progress = styled.div({
  marginTop: '2vh',
  textAlign: 'center',
  fontSize: '25px',
});

export default function ProgressForm({ id }) {
  return (
    <Progress>{id} / 9</Progress>
  )
}
