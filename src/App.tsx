import { Container } from '@mui/material';
import React from 'react';

import AppRoutes from './Routes';

function App() {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppRoutes />
    </Container>
  );
}

export default App;
