import PageLayout from '../../../components/layout/PageLayout';
import RestaurantForm from '../../../components/restaurants/write/RestaurantForm';

export default function RestaurantCreate() {
  return (
    <PageLayout title="Restaurant creation">
      <RestaurantForm />
    </PageLayout>
  );
}
