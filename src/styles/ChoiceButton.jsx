import styled from '@emotion/styled';

const ChoiceButton = styled.button({
  padding: '20px',
  backgroundColor: 'white',
  color: '#828282',
  border: 'none',
  fontSize: '18px',
  textAlign: 'left',
  height: '100px',
  borderRadius: '10px',
  '&:hover': {
    boxShadow: '0px 0px 5px 1px rgba(0, 0, 0, 0.07)',
  },
  '&:focus': {
    outline: 'none',
  },
})

export default ChoiceButton;
