import { useCallback, useEffect } from 'react';

import PageLayout from '../../../components/layout/PageLayout';
import { IRestaurantForm } from '../../../components/restaurants/write/helpers';
import RestaurantForm from '../../../components/restaurants/write/RestaurantForm';
import useRestaurantMutation from '../../../components/restaurants/write/useRestaurantMutation';
import { Restaurant } from '../../../lib/types';

export default function RestaurantCreate() {
  const {
    mutate,
    result: { data, error },
  } = useRestaurantMutation();

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
        latLng: {
          lat: Number.parseInt(values.latLng.lat),
          lng: Number.parseInt(values.latLng.lng),
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
        params.point = Number.parseInt(values.point);
      }

      if (values.link.mangpl) {
        params.link.mangpl = values.link.mangpl;
      }
      if (values.link.naver) {
        params.link.naver = values.link.naver;
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
