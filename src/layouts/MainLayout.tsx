import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export const MainLayout = () => {
  return (
    <div className="grid h-screen grid-cols-[300px_1fr] grid-rows-[auto_1fr] content-start overflow-auto">
      <Header />

      <Sidebar />

      <main className="col-span-1 row-span-1">
        <Outlet />
      </main>
    </div>
  );
};
