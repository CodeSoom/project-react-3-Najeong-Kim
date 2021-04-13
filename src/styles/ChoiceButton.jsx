import styled from '@emotion/styled';

const ChoiceButton = styled.button({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'white',
  color: '#828282',
  border: 'none',
  fontSize: '22px',
  lineHeight: '35px',
  textAlign: 'left',
  height: '55vh',
  borderRadius: '10px',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.05)',
  },
  '&:focus': {
    outline: 'none',
  },
  '& > div': {
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '30vw',
      maxWidth: '300px',
      height: '25vw',
      maxHeight: '250px',
      objectFit: 'cover',
      margin: '20px 0',
      borderRadius: '10px',
    },
  },
  '& p': {
    margin: '10px 0',
    backgroundColor: 'white',
  },
});

const MobileChoiceButton = styled.button({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: 'white',
  color: '#828282',
  border: 'none',
  fontSize: '20px',
  lineHeight: '25px',
  textAlign: 'left',
  height: '100%',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0px 0px 5px 3px rgba(0, 0, 0, 0.15)',
  '&:focus': {
    outline: 'none',
  },
  '& > div': {
    backgroundColor: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '25vw',
      maxWidth: '100px',
      height: '20vw',
      maxHeight: '80px',
      objectFit: 'cover',
      margin: '0 10px 0 0',
      borderRadius: '10px',
    },
  },
  '& p': {
    margin: '10px 0',
    backgroundColor: 'white',
  },
});

export { ChoiceButton, MobileChoiceButton };
