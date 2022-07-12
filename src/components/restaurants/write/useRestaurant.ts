import { doc, getDoc } from 'firebase/firestore/lite';
import { useCallback, useEffect, useState } from 'react';

import { db } from '../../../lib/firebase';
import { Restaurant } from '../../../lib/types';

export default function useRestaurant(id: string) {
  const [data, setData] = useState<Restaurant | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    const docRef = doc(db, 'restaurants', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData({
        ...docSnap.data(),
        id: id,
      } as Restaurant);
    } else {
      setError('error');
    }
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
