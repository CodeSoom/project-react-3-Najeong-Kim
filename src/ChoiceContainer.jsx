import React from 'react';

export default function ChoiceContainer({ onClick }) {
  return (
    <div>
      <h2>Choice</h2>
      <h3>어디서 비타민을 먹을까요?</h3>
      <button
        type="button"
        onClick={onClick}
      >
        저는 실내에서 먹는 비타민을 좋아해요.
        <br />
        집안에서도 얼마든지 재밌게 놀 수 있어요.
        <br />
        이불 밖은 위험해!
      </button>
      <button
        type="button"
        onClick={onClick}
      >
        저는 햇빛을 받아야 기분이 좋아져요.
        <br />
        이렇게 좋은 날 집에만 있을 수는 없어요!
      </button>
    </div>
  );
}
