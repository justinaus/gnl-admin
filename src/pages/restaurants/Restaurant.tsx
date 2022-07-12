import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageLayout from '../../components/layout/PageLayout';
import { IRestaurantForm } from '../../components/restaurants/write/helpers';
import RestaurantForm from '../../components/restaurants/write/RestaurantForm';
import useRestaurant from '../../components/restaurants/write/useRestaurant';
import { RoutePath } from '../../helpers/routePath';
import { Restaurant } from '../../lib/types';

export default function RestaurantUpdate() {
  const { id } = useParams();

  const { data, error } = useRestaurant(id!);

  const navigate = useNavigate();

  useEffect(() => {
    if (!error) return;

    alert(error);

    navigate(RoutePath.Restaurants);
  }, [error, navigate]);

  const defaultValues = useMemo((): IRestaurantForm | null => {
    if (!data) return null;

    return {
      name: data.name,
      latLng: {
        lat: String(data.latLng.lat),
        lng: String(data.latLng.lng),
      },
      content: data.content || '',
      emoji: data.emoji || '',
      point:
        data.point === undefined || data.point === null
          ? ''
          : String(data.point),
      hashtags: data.hashtags ? data.hashtags.join(' ') : '',
      link: {
        mangpl: data.link.mangpl || '',
        naver: data.link.naver || '',
        micherin: data.link.micherin || '',
        blueribbon: data.link.blueribbon || '',
      },
    };
  }, [data]);

  const handleSubmit = useCallback(
    (values: IRestaurantForm) => {
      let params: Restaurant = {
        id: id!,
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

      // mutate(params);
    },
    [id],
  );

  return (
    <PageLayout title="Restaurant modification">
      {defaultValues && (
        <RestaurantForm defaultValues={defaultValues} onSubmit={handleSubmit} />
      )}
    </PageLayout>
  );
}
