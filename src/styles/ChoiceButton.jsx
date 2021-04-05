import styled from '@emotion/styled';

const ChoiceButton = styled.button({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'white',
  color: '#828282',
  border: 'none',
  fontSize: '18px',
  textAlign: 'left',
  height: '150px',
  borderRadius: '10px',
  '&:hover': {
    boxShadow: '0px 0px 5px 1px rgba(0, 0, 0, 0.07)',
  },
  '&:focus': {
    outline: 'none',
  },
  '& img': {
    width: '120px',
    height: '120px',
    marginRight: '20px',
    borderRadius: '10px',
  },
  '& p': {
    backgroundColor: 'white',
  }
});

export default ChoiceButton;
