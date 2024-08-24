import { ScrollRestoration } from 'react-router-dom';

import { Head } from '@components/head/Head';
import { PrevNextPage } from '@features/PrevNextPage';
import { ScrollProgress } from '@features/ScrollProgress';

import { navigation } from '@routes/constants';

type ContentLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const ContentLayout = ({
  title,
  children,
}: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />

      <ScrollRestoration />
      
      <ScrollProgress />

      <div className="relative max-w-5xl p-10">
        <h1>{title}</h1>

        <div className="mt-5">{children}</div>

        <div className="mt-8">
          <PrevNextPage routes={navigation} />
        </div>
      </div>
    </>
  );
};
