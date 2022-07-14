import { useCallback, useEffect } from 'react';

import PageLayout from '../../../components/layout/PageLayout';
import { IRestaurantForm } from '../../../components/restaurants/write/helpers';
import RestaurantForm from '../../../components/restaurants/write/RestaurantForm';
import useRestaurantCreate from '../../../components/restaurants/write/useRestaurantCreate';
import { Restaurant } from '../../../lib/types';

export default function RestaurantCreate() {
  const {
    mutate,
    result: { data, error },
  } = useRestaurantCreate();

  useEffect(() => {
    if (!error) return;

    alert(error);
  }, [error]);

  useEffect(() => {
    if (!data) return;

    alert(data.success ? 'Success' : 'Failed');
  }, [data]);

  const handleSubmit = useCallback(
    (values: IRestaurantForm) => {
      let params: Omit<Restaurant, 'id'> = {
        name: values.name,
        naverId: values.naverId,
        latLng: {
          lat: Number.parseFloat(values.latLng.lat),
          lng: Number.parseFloat(values.latLng.lng),
        },
        link: {},
      };

      if (values.content) {
        params.content = values.content;
      }
      if (values.emoji) {
        params.emoji = values.emoji;
      }
      if (values.point) {
        params.point = Number.parseFloat(values.point);
      }

      if (values.link.mangpl) {
        params.link.mangpl = values.link.mangpl;
      }
      if (values.link.micherin) {
        params.link.micherin = values.link.micherin;
      }
      if (values.link.blueribbon) {
        params.link.blueribbon = values.link.blueribbon;
      }

      if (values.hashtags) {
        params.hashtags = values.hashtags.split(' ').map((tag) => tag.trim());
      }

      mutate(params);
    },
    [mutate],
  );

  return (
    <PageLayout title="Restaurant creation">
      <RestaurantForm onSubmit={handleSubmit} />
    </PageLayout>
  );
}
