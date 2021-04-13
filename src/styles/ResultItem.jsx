import styled from '@emotion/styled';

const ResultItem = styled.div({
  backgroundColor: 'white',
  fontSize: '18px',
  '& a': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'white',
    textDecoration: 'none',
    color: '#737B7D',
  },
  '& img': {
    width: '20vw',
    maxWidth: '200px',
    height: '20vw',
    maxHeight: '200px',
    objectFit: 'cover',
    marginBottom: '20px',
    borderRadius: '10px',
  },
  '& span': {
    backgroundColor: 'white',
    fontSize: '20px',
  },
});

const MobileResultItem = styled.div({
  backgroundColor: 'white',
  fontSize: '15px',
  '& a': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'white',
    textDecoration: 'none',
    color: '#737B7D',
  },
  '& img': {
    width: '30vw',
    maxWidth: '100px',
    height: '30vw',
    maxHeight: '100px',
    objectFit: 'cover',
    marginBottom: '5%',
    borderRadius: '10px',
  },
  '& span': {
    backgroundColor: 'white',
    fontSize: '18px',
  },
});

export { ResultItem, MobileResultItem };
