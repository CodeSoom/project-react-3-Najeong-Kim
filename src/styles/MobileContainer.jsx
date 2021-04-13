import styled from '@emotion/styled';

const MobileContainer = styled.div({
  display: 'flex',
  height: '85%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& h2': {
    color: '#FFB61D',
    fontSize: '50px',
    margin: '0',
  },
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between',
    margin: '0',
    '& img': {
      width: '40%',
      height: 'auto',
      margin: 'auto',
    },
    '& .homeText': {
      color: '#323232',
      fontSize: '20px',
      lineHeight: '28px',
      margin: '5% auto',
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

export default MobileContainer;
