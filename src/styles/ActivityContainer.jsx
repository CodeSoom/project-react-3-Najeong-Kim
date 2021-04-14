import styled from '@emotion/styled';

const ActivityContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  height: '70vh',
});

const ActivityMobileContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  textAlign: 'center',
  '& h2': {
    color: '#FFB61D',
    fontSize: '30px',
    margin: '0',
  },
  '& img': {
    width: '250px',
    height: '200px',
    objectFit: 'cover',
    margin: '5% auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
  },
  '& p': {
    margin: '5%',
    fontSize: '20px',
  },
});

export { ActivityContainer, ActivityMobileContainer };
