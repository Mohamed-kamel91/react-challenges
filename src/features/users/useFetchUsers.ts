import { useCallback, useEffect, useState } from 'react';
import { Users } from './types';

const URL = 'https://swapi.dev/api/people';

export const useFetchUsers = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Users | null>(null);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const fetchNextUsers = useCallback(async () => {
    if (!data?.next) return;
    setLoading(true);

    try {
      const response = await fetch(data.next);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const nextUsers: Users = await response.json();

      setData((prevUsers) => {
        if (prevUsers) {
          return {
            ...nextUsers,
            results: [
              ...prevUsers.results,
              ...nextUsers.results,
            ],
          };
        }

        return prevUsers;
      });
    } catch (error: any) {
      setIsError(true);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [data?.next]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Users = await response.json();

        setData(data);
      } catch (error: any) {
        setIsError(true);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { isLoading, data, error, isError, fetchNextUsers };
};
