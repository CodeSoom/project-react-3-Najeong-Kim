import styled from '@emotion/styled';

const Back = styled.div({
  position: 'fixed',
  top: '50px',
  left: '3.5vw',
  '& button': {
    textDecoration: 'none',
    fontSize: '30px',
    color: '#F2C94C',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: '#FFB61D',
    },
    '&:focus': {
      outline: 'none',
    }
  }
});

export default Back;
