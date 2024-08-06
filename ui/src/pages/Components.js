import { Grid } from '@mui/material';
import React from 'react';
import HistoryUX from '../components/HistoryUX';

function Components() {
  return (
    <Grid container justifyContent="center" mt={4} mb={4}>
      <Grid item xs={12} md={8}>
        <HistoryUX />
      </Grid>
    </Grid>
  );
}

export default Components;
