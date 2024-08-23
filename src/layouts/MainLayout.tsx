import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ScrollTop } from '@features/ScrollTop';

export const MainLayout = () => {
  return (
    <>
      <div className="grid min-h-screen grid-cols-[300px_1fr] grid-rows-[auto_1fr] content-start">
        <div className="sticky top-0 z-50 col-span-2">
          <Header />
        </div>

        <div className="sticky top-[71px] col-span-1 row-span-1 max-h-[calc(100vh-71px)] overflow-auto">
          <Sidebar />
        </div>

        <main className="col-start-2">
          <Outlet />
        </main>

        <ScrollTop />
      </div>
    </>
  );
};
