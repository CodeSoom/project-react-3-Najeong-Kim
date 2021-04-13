import styled from '@emotion/styled';

const List = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

const MobileList = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

export { List, MobileList };
