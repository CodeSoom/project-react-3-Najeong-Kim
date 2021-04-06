import React from 'react';

export default function HomeForm({ userName, onChange }) {

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <input type="text" name="userName" value={userName} onChange={handleChange} placeholder="이름을 입력하세요." />
    </div>
  )
}
