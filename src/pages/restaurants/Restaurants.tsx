import { Button } from '@mui/material';

import PageLayout from '../../components/layout/PageLayout';
import RestaurantsTable from '../../components/restaurants/list/Table';

export default function Restaurants() {
  return (
    <PageLayout title="Restaurants">
      <Button variant="contained">test</Button>
      <RestaurantsTable />
    </PageLayout>
  );
}
