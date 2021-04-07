import styled from '@emotion/styled';

const Header = styled.header({
  display: 'grid',
  gridTemplateColumns: '1fr 6fr 1fr',
  textAlign: 'center',
  fontSize: '15px',
  margin: '20px 0px',
  '& h1': {
    margin: '0',
  },
  '& a': {
    color: '#F2C94C',
    textDecoration: 'none',
    fontSize: '30px',
    '&:hover': {
      color: '#FFB61D',
    },
  },
});

export default Header;
