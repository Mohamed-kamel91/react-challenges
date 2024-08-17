import { Head } from '@components/head/Head';

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
      
      <div className="max-w-5xl px-10 pt-10">
        <h1>{title}</h1>

        <div className="mt-5">{children}</div>
      </div>
    </>
  );
};
