import styled from '@emotion/styled';

const Container = styled.div({
  display: 'grid',
  height: '85%',
  gridTemplateColumns: 'repeat(2, 1fr)',
  '& img': {
    width: '90%',
    height: 'auto',
    margin: 'auto',
  },
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    margin: '15% 0',
    '& h2': {
      color: '#FFB61D',
      fontSize: '70px',
      margin: '0',
    },
    '& .homeText': {
      color: '#323232',
      fontSize: '25px',
      lineHeight: '50px',
    },
    '& .introText': {
      color: '#323232',
      fontSize: '22px',
      lineHeight: '40px',
    },
    '& .introPlusText': {
      color: 'gray',
      fontSize: '18px',
      lineHeight: '30px',
    },
  },
});

export default Container;