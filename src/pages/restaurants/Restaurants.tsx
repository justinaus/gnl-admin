import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import PageLayout from '../../components/layout/PageLayout';
import RestaurantsTable from '../../components/restaurants/list/Table';
import { RoutePath } from '../../helpers/routePath';

export default function Restaurants() {
  return (
    <PageLayout title="Restaurants">
      <Link to={`${RoutePath.RestaurantsCreate}`}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            marginBottom: 4,
          }}
        >
          Add
        </Button>
      </Link>
      <RestaurantsTable />
    </PageLayout>
  );
}
