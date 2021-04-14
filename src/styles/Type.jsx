import styled from '@emotion/styled';

const Type = styled.div({
  '& img': {
    width: '300px',
    height: '250px',
    marginTop: '20px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
  },
  '& p': {
    fontSize: '25px',
  },
});

const MobileType = styled.div({
  '& img': {
    width: '60vw',
    height: '25vh',
    objectFit: 'cover',
    margin: '5% 0',
    borderRadius: '10px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
  },
  '& p': {
    fontSize: '18px',
  },
});

export { Type, MobileType };
