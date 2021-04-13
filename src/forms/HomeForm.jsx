import React from 'react';

import styled from '@emotion/styled';

const Input = styled.input({
  width: '70%',
  maxWidth: '300px',
  backgroundColor: '#E7EAEE',
  padding: '15px 40px',
  border: 'none',
  borderRadius: '10px',
  fontSize: '20px',
  '&:focus': {
    outline: 'none',
  },
  '&::placeholder': {
    fontSize: '20px',
  },
});

export default function HomeForm({ userName, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <Input type="text" name="userName" value={userName} onChange={handleChange} placeholder="이름을 입력하세요." />
    </div>
  );
}
