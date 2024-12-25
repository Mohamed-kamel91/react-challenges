import { UserItem } from './UserItem';

import { useIntersectionObserver } from '@features/int-observer';
import { useFetchUsers } from './useFetchUsers';

export const Users = () => {
  const { isLoading, data, isError, fetchNextUsers } =
    useFetchUsers();

  const { ref } = useIntersectionObserver({
    once: false,
    // initialTrigger: false,
    onChange: fetchNextUsers,
  });

  if (isError) {
    return <div>Error occured</div>;
  }

  if (!isLoading && !data) {
    return <div>Users not found</div>;
  }

  return (
    <>
      {data?.results.map((item) => (
        <UserItem key={item.name} user={item} />
      ))}

      <div ref={ref} />

      {isLoading && <div>Loading...</div>}
    </>
  );
};
