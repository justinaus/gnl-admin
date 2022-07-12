import { collection, getDocs } from 'firebase/firestore/lite';
import { useCallback, useEffect, useState } from 'react';

import { db } from '../../../lib/firebase';
import { Restaurant } from '../../../lib/types';

export default function useRestaurants() {
  const [data, setData] = useState<Restaurant[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(() => {
    const restaurantsCol = collection(db, 'restaurants');

    getDocs(restaurantsCol)
      .then((restaurantsSnapshot) => {
        const list = restaurantsSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Restaurant[];

        setData(list);
      })
      .catch(() => {
        setError('error');
      });
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    data,
    error,
  };
}
