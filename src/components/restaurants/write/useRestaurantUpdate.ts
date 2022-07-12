import { doc, updateDoc } from 'firebase/firestore/lite';
import { useCallback, useState } from 'react';

import { db } from '../../../lib/firebase';
import { Restaurant } from '../../../lib/types';

export default function useRestaurantUpdate(id: string) {
  const [data, setData] = useState<{
    success: boolean;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(
    async (data: Omit<Restaurant, 'id'>) => {
      const docRef = doc(db, 'restaurants', id);

      try {
        await updateDoc(docRef, {
          ...data,
        });

        setData({
          success: !!docRef.id,
        });
      } catch (e) {
        console.error('Error adding document: ', e);
        setError('error');
      }
    },
    [id],
  );

  return {
    mutate,
    result: {
      data,
      error,
    },
  };
}
