import styled from '@emotion/styled';

const WrapperLeft = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '5vh 0',
  '& h2': {
    color: '#FFB61D',
    fontSize: '40px',
    marginBottom: '20px',
  },
  '& div': {
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5vh',
  },
  '& img': {
    width: '35vw',
    maxWidth: '400px',
    height: '35vw',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
});

const WrapperRight = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '5vh 0',
  padding: '15px',
  paddingRight: '10vw',
  '& > p': {
    paddingLeft: '10px',
    color: '#323232',
    fontSize: '22px',
    lineHeight: '35px',
  },
});

export { WrapperLeft, WrapperRight };
