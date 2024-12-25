import { ContentLayout } from '@layouts';
import { Users } from '@features/users/Users';

export const InterObserver = () => {
  return (
    <ContentLayout title="Intersection Observer">
      <div>
        <Users />
      </div>
    </ContentLayout>
  );
};
