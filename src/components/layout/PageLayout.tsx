import { Box, Typography } from '@mui/material';
import React from 'react';

import ErrorBoundary from '../shared/ErrorBoundary';

type Props = { title: string };

export default function PageLayout({
  title,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 8,
      }}
    >
      <ErrorBoundary>
        <Box>
          <Typography variant="h5" marginBottom={4}>
            {title}
          </Typography>
          {children}
        </Box>
      </ErrorBoundary>
    </Box>
  );
}
