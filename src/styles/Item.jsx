import styled from '@emotion/styled';

const Item = styled.li({
  backgroundColor: 'white',
  margin: '5%',
  padding: '5px',
  borderRadius: '10px',
  '&:hover': {
    boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.05)',
  },
});

const MobileItem = styled.li({
  backgroundColor: 'white',
  margin: '5%',
  padding: '1%',
  borderRadius: '10px',
  boxShadow: '0px 0px 5px 3px rgba(0, 0, 0, 0.05)',
});

export { Item, MobileItem };
