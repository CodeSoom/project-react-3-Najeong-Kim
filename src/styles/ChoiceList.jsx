import styled from '@emotion/styled';

const ChoiceList = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

const ChoiceMobileList = styled.ul({
  display: 'grid',
  gridTemplateRows: 'repeat(2, 1fr)',
  height: '60vh',
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

export { ChoiceList, ChoiceMobileList };
