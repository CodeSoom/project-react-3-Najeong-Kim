import styled from '@emotion/styled';

const Back = styled.div({
  position: 'fixed',
  right: '10px',
  '& button': {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#F2C94C',
    border: 'none',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    }
  }
});

export default Back;
