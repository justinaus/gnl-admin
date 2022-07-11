import { Box, Stack, Typography } from '@mui/material';
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
        <Stack spacing={4}>
          <Typography variant="h5">{title}</Typography>
          {children}
        </Stack>
      </ErrorBoundary>
    </Box>
  );
}
