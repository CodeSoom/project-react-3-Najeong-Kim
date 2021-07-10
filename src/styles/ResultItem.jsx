import styled from '@emotion/styled';

const ResultItem = styled.div({
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

export default ResultItem;
