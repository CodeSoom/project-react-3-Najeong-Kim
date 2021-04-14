import styled from '@emotion/styled';

const StartButton = styled.div({
  margin: '20px 0',
  textAlign: 'center',
  '& a': {
    fontSize: '25px',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#F2C94C',
    padding: '10px 18px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#FFB61D',
    },
  },
});

export default StartButton;
