import { collection, getDocs } from 'firebase/firestore/lite';
import { useCallback, useEffect, useState } from 'react';

import { db } from '../../../lib/firebase';
import { Restaurant } from '../../../lib/types';

export default function useRestaurant(id: string) {
  const [data, setData] = useState<Restaurant | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(() => {
    const restaurantsCol = collection(db, 'restaurants');

    getDocs(restaurantsCol)
      .then((restaurantsSnapshot) => {
        const finded = restaurantsSnapshot.docs.find((doc) => doc.id === id);

        if (!finded) {
          throw new Error('no id');
        }

        setData({
          ...finded.data(),
          id: id,
        } as Restaurant);
      })
      .catch(() => {
        setError('error');
      });
  }, [id]);

  useEffect(() => {
    if (!id) return;

    fetch();
  }, [fetch, id]);

  return {
    data,
    error,
  };
}
