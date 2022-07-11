import { createTheme } from '@mui/material';

export const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: ['SUIT', 'sans-serif'].join(','),
    button: {
      textTransform: 'none', // 이거 없음 영어 다 대문자로 됨.
    },
  },
  components: {
    MuiTableCell: {
      defaultProps: {
        align: 'center',
      },
    },
  },
});
