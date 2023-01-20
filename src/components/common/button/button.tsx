import { Button as MuiButton, ButtonProps, styled } from '@mui/material';

const Button = styled(MuiButton)<ButtonProps>(() => ({
  width: '100%',
  padding: '15px 40px',
  textTransform: 'none',
  color: '#fff',
  backgroundColor: '#4D384E',
  fontSize: 20,
  fontWeight: 700,
  borderRadius: '50px',
  ':hover': {
    backgroundColor: '#392a3a',
  },
  '@media (max-width: 900px)': {
    padding: '10px 20px',
    fontSize: 16,
  },
}));

export { Button };
