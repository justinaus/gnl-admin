import { addDoc, collection } from 'firebase/firestore/lite';
import { useCallback, useState } from 'react';

import { db } from '../../../lib/firebase';
import { Restaurant } from '../../../lib/types';

export default function useRestaurantCreate() {
  const [data, setData] = useState<{
    success: boolean;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (data: Omit<Restaurant, 'id'>) => {
    const restaurantsCol = collection(db, 'restaurants');

    try {
      const docRef = await addDoc(restaurantsCol, {
        ...data,
      });
      console.log('Document written with ID: ', docRef.id);
      setData({
        success: !!docRef.id,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
      setError('error');
    }
  }, []);

  return {
    mutate,
    result: {
      data,
      error,
    },
  };
}
