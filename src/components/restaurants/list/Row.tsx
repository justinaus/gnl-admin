import { Button, TableCell, TableRow } from '@mui/material';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { RoutePath } from '../../../helpers/routePath';
import { Restaurant } from '../../../lib/types';

interface Props extends React.ComponentProps<typeof TableRow> {
  data: Restaurant;
}

export default function Row({ data, ...rest }: Props) {
  const hashtagsText = useMemo(() => {
    if (!data.hashtags) return null;

    return data.hashtags.join(', ');
  }, [data.hashtags]);

  return (
    <TableRow hover {...rest}>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.point}</TableCell>
      <TableCell>{data.emoji}</TableCell>
      <TableCell>{hashtagsText}</TableCell>
      <TableCell>
        <Link to={`${RoutePath.Restaurants}/${data.id}`}>
          <Button variant="outlined">보기</Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}
