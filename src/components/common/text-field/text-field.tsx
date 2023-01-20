import { styled, TextField as MuiTextField } from '@mui/material';

const TextField = styled(MuiTextField)({
  '& label.Mui-focused': {
    color: '#92C800',
  },

  '& .MuiFilledInput-root': {
    '& fieldset': {
      borderColor: '#92C800',
    },
    '&:hover fieldset': {
      borderColor: '#92C800',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#92C800',
    },
  },

  '.MuiFilledInput-root': {
    borderBottom: '1px solid #92C800 !important',
  },
});

export { TextField };
