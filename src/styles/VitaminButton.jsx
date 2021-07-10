import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';

const wobbleHorBottom = keyframes`
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-12px) rotate(-4deg);
  }
  30% {
    transform: translateX(9px) rotate(4deg);
  }
  45% {
    transform: translateX(-9px) rotate(-2.8deg);
  }
  60% {
    transform: translateX(6px) rotate(2deg);
  }
  75% {
    transform: translateX(-3px) rotate(-1.2deg);
  }
`;

const VitaminButton = styled.div({
  marginTop: '10px',
  textAlign: 'center',
  '& a': {
    fontSize: '80px',
    color: '#F2C94C',
    textDecoration: 'none',
    padding: '8px 15px',
    borderRadius: '10px',
    '& i': {
      animation: `${wobbleHorBottom} 2.5s ease-in-out infinite both;`,
      '&:hover': {
        color: '#FFB61D',
      },
    },
  },
});

export default VitaminButton;
