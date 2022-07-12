import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

import Row from './Row';
import useRestaurants from './useRestaurants';

export default function RestaurantsTable() {
  const { data, error } = useRestaurants();

  if (!data) return null;
  if (error) return null;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Point</TableCell>
            <TableCell>Emoji</TableCell>
            <TableCell>Hashtags</TableCell>
            <TableCell width={40}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.id} data={row} hover />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
